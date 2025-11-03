import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phoneNumber, nooftravellers, date } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOption = {
      from: email,
      to: "chalochaleinhimachal@gmail.com",
      subject: "Email From Chalo Chalein Taxi Service Page",
      html: `
      <h4>Chalo Chalein Website Taxi Booking Form Enquiry. Here are the Details:</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p> 
      <p><strong>Contact Number:</strong> ${phoneNumber}</p>
      <p><strong>No. Of Travellers:</strong> ${nooftravellers}</p> 
      <p><strong>Date:</strong> ${date}</p> 
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while sending email:", error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
