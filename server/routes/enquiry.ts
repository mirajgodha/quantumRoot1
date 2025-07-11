import { RequestHandler } from "express";
import { EnquiryRequest, EnquiryResponse } from "@shared/api";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

/**
 * Handle enquiry form submission - sends enquiry details to info@quantumroot.in
 * In a production environment, this would integrate with an email service like:
 * - Nodemailer with SMTP
 * - SendGrid
 * - AWS SES
 * - Mailgun
 *
 * For now, we'll log the enquiry details and simulate sending the email
 */
export const handleEnquirySubmit: RequestHandler = async (req, res) => {
  try {
    const enquiryData = req.body as EnquiryRequest;

    // Validate required fields
    if (
      !enquiryData.name ||
      !enquiryData.email ||
      !enquiryData.phone ||
      !enquiryData.course ||
      !enquiryData.message
    ) {
      const response: EnquiryResponse = {
        success: false,
        message:
          "Missing required fields. Please fill in all required information.",
      };
      return res.status(400).json(response);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enquiryData.email)) {
      const response: EnquiryResponse = {
        success: false,
        message: "Please enter a valid email address.",
      };
      return res.status(400).json(response);
    }

    // Create email content
    const emailSubject = `New Enquiry: ${enquiryData.course}`;
    const emailBody = `
New Course Enquiry Received:

Student Information:
- Name: ${enquiryData.name}
- Email: ${enquiryData.email}
- Phone: ${enquiryData.phone}
- Course Interested In: ${enquiryData.course}

Message:
${enquiryData.message}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // TODO: In production, integrate with an email service
    // Example with Nodemailer:
  
    const transporter = nodemailer.createTransporter({
      host: 'smtp.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@quantumroot.in',
      subject: emailSubject,
      text: emailBody,
      replyTo: enquiryData.email
    });
    

    // For now, log the enquiry details (in production, this would be replaced with actual email sending)
    console.log("=== NEW ENQUIRY SUBMISSION ===");
    console.log("To: info@quantumroot.in");
    console.log("Subject:", emailSubject);
    console.log("Body:");
    console.log(emailBody);
    console.log("==================================");

    // Store enquiry in database (if needed)
    // await saveEnquiryToDatabase(enquiryData);

    const response: EnquiryResponse = {
      success: true,
      message: `Thank you for your enquiry, ${enquiryData.name}! We'll get back to you soon at ${enquiryData.email}.`,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing enquiry:", error);

    const response: EnquiryResponse = {
      success: false,
      message:
        "There was an error sending your enquiry. Please try again or contact us directly.",
    };

    res.status(500).json(response);
  }
};
