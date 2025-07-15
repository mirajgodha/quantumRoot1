import { RequestHandler } from "express";
import { ContactRequest, ContactResponse } from "@shared/api";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

/**
 * Handle contact form submission - sends contact details to info@quantumroot.in
 * In a production environment, this would integrate with an email service like:
 * - Nodemailer with SMTP
 * - SendGrid
 * - AWS SES
 * - Mailgun
 *
 * For now, we'll log the contact details and simulate sending the email
 */
export const handleContactSubmit: RequestHandler = async (req, res) => {
  try {
    const contactData = req.body as ContactRequest;

    // Validate required fields
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.subject ||
      !contactData.message
    ) {
      const response: ContactResponse = {
        success: false,
        message:
          "Missing required fields. Please fill in all required information.",
      };
      return res.status(400).json(response);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      const response: ContactResponse = {
        success: false,
        message: "Please enter a valid email address.",
      };
      return res.status(400).json(response);
    }

    // Create email content
    const emailSubject = `Contact Form: ${contactData.subject}`;
    const emailBody = `
New Contact Form Submission:

From: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}
Subject: ${contactData.subject}

Message:
${contactData.message}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // TODO: In production, integrate with an email service
    // Example with Nodemailer (temporarily disabled for debugging):

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.secureserver.net",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Temporarily comment out actual email sending for debugging
      // await transporter.sendMail({
      //   from: process.env.EMAIL_USER,
      //   to: "info@quantumroot.in",
      //   subject: emailSubject,
      //   text: emailBody,
      //   replyTo: contactData.email,
      // });

      console.log(
        "[Email] Would send email with nodemailer (disabled for debugging)",
      );
    } catch (emailError) {
      console.error("[Email] Error setting up nodemailer:", emailError);
      // Don't throw - continue with logging for now
    }

    // For now, log the contact details (in production, this would be replaced with actual email sending)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("To: info@quantumroot.in");
    console.log("Subject:", emailSubject);
    console.log("Body:");
    console.log(emailBody);
    console.log("=====================================");

    // Store contact submission in database (if needed)
    // await saveContactToDatabase(contactData);

    const response: ContactResponse = {
      success: true,
      message: `Thank you for contacting us, ${contactData.name}! We'll get back to you soon at ${contactData.email}.`,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing contact form:", error);

    const response: ContactResponse = {
      success: false,
      message:
        "There was an error sending your message. Please try again or contact us directly.",
    };

    res.status(500).json(response);
  }
};
