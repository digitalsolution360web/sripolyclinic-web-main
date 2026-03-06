import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER as string,           // Your Gmail
        pass: process.env.GMAIL_APP_PASSWORD as string,  // App password
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.GMAIL_USER as string,
      to: ["digitalsolution3600@gmail.com", "info@sripolyclinic.com"], // send to both
      subject: "New Appointment Request - Sripolyclinic",
      html: `
        <h2>Appointment Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Appointment sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send appointment!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
