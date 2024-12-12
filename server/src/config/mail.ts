import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendEmail = async (to: string, subject: string, body: string) => {
    await transporter.sendMail({
        from: "Clash Admin 🚀", 
        to: to, 
        subject: subject, 
        html: body, 
    });
};
