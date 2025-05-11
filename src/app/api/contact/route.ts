import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, subject } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Будь ласка, заповніть усі обов'язкові поля" },
        { status: 400 }
      );
    }

    // Create transport - in production, replace with real SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    });

    // Configure email options
    const mailOptions = {
      from: `"LEDMedia Форма контакту" <${process.env.EMAIL_USER || 'noreply@ledmedia.ua'}>`,
      to: process.env.RECIPIENT_EMAIL || 'info@ledmedia.ua',
      replyTo: email,
      subject: `Нове повідомлення: ${subject}`,
      text: `
        Ім'я: ${name}
        Email: ${email}
        Телефон: ${phone || 'Не вказано'}
        Тема: ${subject}
        
        Повідомлення:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b3cc;">Нове повідомлення з сайту LEDMedia</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Телефон:</strong> ${phone || 'Не вказано'}</p>
          <p><strong>Тема:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #10b3cc;">
            <p><strong>Повідомлення:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // In development, just log the email content
    if (process.env.NODE_ENV === 'development') {
      console.log('Email would be sent with the following details:');
      console.log(mailOptions);
      
      return NextResponse.json({ success: true });
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Виникла помилка при відправці повідомлення' },
      { status: 500 }
    );
  }
} 