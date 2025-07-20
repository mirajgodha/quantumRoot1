import { RequestHandler } from "express";
import {
  CreateRazorpayOrderRequest,
  CreateRazorpayOrderResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from "@shared/api";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

// Lazy load Razorpay to avoid issues during client build
let razorpay: any = null;
const getRazorpayInstance = async () => {
  if (!razorpay) {
    const Razorpay = (await import("razorpay")).default;
    razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    });
  }
  return razorpay;
};

/**
 * Create Razorpay order for course payment
 */
export const createRazorpayOrder: RequestHandler = async (req, res) => {
  try {
    // Check if request body exists and is valid
    if (!req.body) {
      console.error("Request body is missing or already consumed");
      const response: CreateRazorpayOrderResponse = {
        success: false,
        message: "Invalid request: missing body data",
      };
      return res.status(400).json(response);
    }

    const orderData = req.body as CreateRazorpayOrderRequest;

    // Validate required fields
    if (!orderData.courseId || !orderData.amount || !orderData.courseName) {
      const response: CreateRazorpayOrderResponse = {
        success: false,
        message: "Missing required fields: courseId, amount, or courseName",
      };
      return res.status(400).json(response);
    }

        // Validate Razorpay credentials
    console.log("Environment check:", {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
      keyIdPrefix: process.env.RAZORPAY_KEY_ID?.substring(0, 8) + "...",
    });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay credentials not configured");
      const response: CreateRazorpayOrderResponse = {
        success: false,
        message: "Payment service not configured. Please contact support.",
      };
      return res.status(500).json(response);
    }

    // Create Razorpay order
    const options = {
      amount: orderData.amount * 100, // Razorpay expects amount in paise (multiply by 100)
      currency: "INR",
      receipt: `course_${orderData.courseId}_${Date.now()}`,
      notes: {
        courseId: orderData.courseId,
        courseName: orderData.courseName,
        userEmail: orderData.userEmail,
        userName: orderData.userName,
        userPhone: orderData.userPhone,
      },
    };

    const razorpayInstance = await getRazorpayInstance();
    const order = await razorpayInstance.orders.create(options);

        console.log("Razorpay order created:", {
      orderId: order.id,
      amount: order.amount,
      courseId: orderData.courseId,
      courseName: orderData.courseName,
    });

    // Send payment initiation email to admin
    try {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to admin email
        subject: `💳 Payment Initiated - ${orderData.courseName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">Payment Process Initiated</h2>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #333;">Order Details</h3>
              <p><strong>Order ID:</strong> ${order.id}</p>
              <p><strong>Course:</strong> ${orderData.courseName}</p>
              <p><strong>Amount:</strong> ₹${(order.amount / 100).toLocaleString()}</p>
              <p><strong>Course ID:</strong> ${orderData.courseId}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #333;">Customer Details</h3>
              <p><strong>Name:</strong> ${orderData.userName || 'Not provided'}</p>
              <p><strong>Email:</strong> ${orderData.userEmail || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${orderData.userPhone || 'Not provided'}</p>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
              <p style="margin: 0;"><strong>Status:</strong> Payment gateway opened. Awaiting customer payment completion.</p>
            </div>

            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              You will receive another notification once the payment is completed and verified.
            </p>
          </div>
        `,
      });

      console.log("Payment initiation email sent to admin");
    } catch (emailError) {
      console.error("Failed to send payment initiation email:", emailError);
      // Don't fail the order creation if email fails
    }

    const response: CreateRazorpayOrderResponse = {
      success: true,
      orderId: order.id,
      amount:
        typeof order.amount === "string"
          ? parseInt(order.amount)
          : order.amount,
      currency: order.currency,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);

    const response: CreateRazorpayOrderResponse = {
      success: false,
      message: "Failed to create payment order. Please try again.",
    };

    res.status(500).json(response);
  }
};

/**
 * Verify Razorpay payment after successful payment
 */
export const verifyRazorpayPayment: RequestHandler = async (req, res) => {
  try {
    // Check if request body exists and is valid
    if (!req.body) {
      console.error("Request body is missing or already consumed");
      const response: VerifyPaymentResponse = {
        success: false,
        message: "Invalid request: missing body data",
      };
      return res.status(400).json(response);
    }

    const paymentData = req.body as VerifyPaymentRequest;

    // Validate required fields
    if (
      !paymentData.razorpay_order_id ||
      !paymentData.razorpay_payment_id ||
      !paymentData.razorpay_signature ||
      !paymentData.courseId
    ) {
      const response: VerifyPaymentResponse = {
        success: false,
        message: "Missing required payment verification data",
      };
      return res.status(400).json(response);
    }

    // Verify signature
    const body =
      paymentData.razorpay_order_id + "|" + paymentData.razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== paymentData.razorpay_signature) {
      console.error("Payment signature verification failed", {
        expected: expectedSignature,
        received: paymentData.razorpay_signature,
      });

      const response: VerifyPaymentResponse = {
        success: false,
        message: "Payment verification failed. Invalid signature.",
      };
      return res.status(400).json(response);
    }

    // Payment verified successfully
    console.log("Payment verified successfully:", {
      orderId: paymentData.razorpay_order_id,
      paymentId: paymentData.razorpay_payment_id,
      courseId: paymentData.courseId,
      userEmail: paymentData.userDetails.email,
    });

        // Send payment notification email to admin
    try {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email to admin with payment details
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to admin email
        subject: `🎉 New Course Payment Received - ${paymentData.courseId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Course Payment Received</h2>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #333;">Payment Details</h3>
              <p><strong>Order ID:</strong> ${paymentData.razorpay_order_id}</p>
              <p><strong>Payment ID:</strong> ${paymentData.razorpay_payment_id}</p>
              <p><strong>Course ID:</strong> ${paymentData.courseId}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #333;">Student Details</h3>
              <p><strong>Name:</strong> ${paymentData.userDetails.name}</p>
              <p><strong>Email:</strong> ${paymentData.userDetails.email}</p>
              <p><strong>Phone:</strong> ${paymentData.userDetails.phone}</p>
            </div>

            <div style="background: #e7f4ff; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
              <p style="margin: 0;"><strong>Action Required:</strong> Please process the enrollment and grant course access to the student.</p>
            </div>

            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              This email was automatically generated from QuantumRoot payment system.
            </p>
          </div>
        `,
      });

      console.log("Payment notification email sent to admin");
    } catch (emailError) {
      console.error("Failed to send payment notification email:", emailError);
      // Don't fail the payment verification if email fails
    }

    const response: VerifyPaymentResponse = {
      success: true,
      message: `Payment verified successfully! You have been enrolled in the course. Confirmation details will be sent to ${paymentData.userDetails.email}`,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error verifying payment:", error);

    const response: VerifyPaymentResponse = {
      success: false,
      message: "Payment verification failed. Please retry the payment or contact our support.",
    };

    res.status(500).json(response);
  }
};
