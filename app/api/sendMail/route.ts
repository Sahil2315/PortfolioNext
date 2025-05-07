import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });

  const requestJson = await req.json();
  const mailOptions = {
    from: requestJson.senderName,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contacted through Portfolio - sahilnigam.online",
    html: `
      <h3> Sender Name - ${requestJson.senderName} </h3>
      <h3> Sender Email - ${requestJson.senderEmail} </h3>
      <h3> Subject for Message - ${requestJson.subject} </h3>
      <h4>Message - </h4>
      <h5>${requestJson.message}</h5>
    `,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info); // Log the email info
    return NextResponse.json({ message: "Successful" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: "Failed" });
  }

}
