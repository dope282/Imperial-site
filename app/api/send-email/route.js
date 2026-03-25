import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // Бүх талбаруудыг авах
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company") || "Байхгүй";
    const position = formData.get("position") || "Заагаагүй";
    const type = formData.get("type") || "Заагаагүй";
    const experience = formData.get("experience");
    const cvFile = formData.get("cv");

    // --- ЯЛГАХ ЛОГИК ---
    // Хэрэв cvFile байвал энэ нь "АНКЕТ", байхгүй бол "ХОЛБОО БАРИХ"
    const isApplication = cvFile && cvFile.size > 0;
    const mailSubject = isApplication 
      ? `[АЖЛЫН АНКЕТ] - ${name} (${position})` 
      : `[ХОЛБОО БАРИХ ХҮСЭЛТ] - ${name}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // .env-ээс авна
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    // Мэйл доторх бүтцийг ялгаатай харуулах
    const htmlContent = isApplication ? `
      <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #0056b3;">Шинэ ажлын анкет ирлээ</h2>
        <hr />
        <p><b>Нэр:</b> ${name}</p>
        <p><b>Утас:</b> ${phone}</p>
        <p><b>Имэйл:</b> ${email}</p>
        <p><b>Сонирхож буй албан тушаал:</b> ${position}</p>
        <p><b>Туршлага:</b> ${experience}</p>
        <p style="color: #666; font-size: 12px;">* CV файлыг хавсралтаас үзнэ үү.</p>
      </div>
    ` : `
      <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #0054A6;">Холбоо барих хүсэлт (Лавлагаа)</h2>
        <hr />
        <p><b>Нэр:</b> ${name}</p>
        <p><b>Байгууллага:</b> ${company}</p>
        <p><b>Утас:</b> ${phone}</p>
        <p><b>Имэйл:</b> ${email}</p>
        <p><b>Бодисын төрөл:</b> ${type}</p>
        <p><b>Дэлгэрэнгүй:</b> ${experience}</p>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: mailSubject, // Энд гарчиг ялгарч харагдана
      html: htmlContent,
      attachments: []
    };

    if (isApplication) {
      const bytes = await cvFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      mailOptions.attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}