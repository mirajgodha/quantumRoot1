import { RequestHandler } from "express";
import { EnrollmentRequest, EnrollmentResponse } from "@shared/api";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

/**
 * Handle enrollment submission - sends enrollment details to info@quantumroot.in
 * In a production environment, this would integrate with an email service like:
 * - Nodemailer with SMTP
 * - SendGrid
 * - AWS SES
 * - Mailgun
 *
 * For now, we'll log the enrollment details and simulate sending the email
 */
export const handleEnrollmentSubmit: RequestHandler = async (req, res) => {
  try {
    const enrollmentData = req.body as EnrollmentRequest;

    // Validate required fields
    if (
      !enrollmentData.name ||
      !enrollmentData.email ||
      !enrollmentData.phone ||
      !enrollmentData.courseName
    ) {
      const response: EnrollmentResponse = {
        success: false,
        message:
          "Missing required fields. Please fill in all required information.",
      };
      return res.status(400).json(response);
    }

    // Create email content
    const emailSubject = `New Course Enrollment - ${enrollmentData.courseName}`;
    const emailBody = `
New Course Enrollment Received:

Student Information:
- Name: ${enrollmentData.name}
- Email: ${enrollmentData.email}
- Phone: ${enrollmentData.phone}
- Preferred Class Type: ${enrollmentData.classType}

Course Information:
- Course Name: ${enrollmentData.courseName}

Additional Message:
${enrollmentData.message || "No additional message"}

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
      //   replyTo: enrollmentData.email,
      // });

      console.log(
        "[Email] Would send email with nodemailer (disabled for debugging)",
      );
    } catch (emailError) {
      console.error("[Email] Error setting up nodemailer:", emailError);
      // Don't throw - continue with logging for now
    }

    // For now, log the enrollment details (in production, this would be replaced with actual email sending)
    console.log("=== NEW ENROLLMENT SUBMISSION ===");
    console.log("To: info@quantumroot.in");
    console.log("Subject:", emailSubject);
    console.log("Body:");
    console.log(emailBody);
    console.log("=====================================");

    // Store enrollment in database (if needed)
    // await saveEnrollmentToDatabase(enrollmentData);

    const response: EnrollmentResponse = {
      success: true,
      message: `Thank you for enrolling in ${enrollmentData.courseName}! We'll contact you soon at ${enrollmentData.email}.`,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing enrollment:", error);

    const response: EnrollmentResponse = {
      success: false,
      message:
        "There was an error processing your enrollment. Please try again or contact us directly.",
    };

    res.status(500).json(response);
  }
};
