import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const position = formData.get("position");
    const education = formData.get("education");
    const experience = formData.get("experience");
    const cvFile = formData.get("cv");

    // Nodemailer тохиргоо (Gmail App Password ашиглах)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jaamaaj26@gmail.com", 
        pass: "xjiq dhzc kxpx nfzr", 
      },
      tls: {
    rejectUnauthorized: false
  }
    });

    // Файлыг Buffer руу хөрвүүлэх
    const bytes = await cvFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const mailOptions = {
      from: "jaamaaj26@gmail.com",
      to: "taybitason@gmail.com", // Анкет очих мэйл
      subject: `Шинэ анкет: ${name} - ${position}`,
      html: `
        <h3>Шинэ ажлын анкет ирлээ</h3>
        <p><b>Нэр:</b> ${name}</p>
        <p><b>Утас:</b> ${phone}</p>
        <p><b>Имэйл:</b> ${email}</p>
        <p><b>Хаяг:</b> ${address}</p>
        <p><b>Сонирхож буй албан тушаал:</b> ${position}</p>
        <p><b>Боловсрол:</b> ${education}</p>
        <p><b>Туршлага:</b> ${experience}</p>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}