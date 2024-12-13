import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendMail = async (
    toEmail: string,
    subject: string,
    body: string
) => {
    try {
        await transporter.sendMail({
            from: "clash@gmail.com",
            to: toEmail,
            subject: subject,
            html: body,
        });
    } catch (error) {
        console.log("ERROR sending Mail: ", error);
    }
};
