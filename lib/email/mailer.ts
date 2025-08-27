import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 54325,
    secure: false,
    tls: { rejectUnauthorized: false },
    connectionTimeout: 5000,
});

interface SendEmailArgs {
    to: string;
    subject: string;
    html: string;
    from?: string;
}

export async function sendEmail({ to, subject, html, from = "WetinHapin <no-reply@wetinhapin.local>" }: SendEmailArgs) {
    return transporter.sendMail({
        from,
        to,
        subject,
        html,
    });
}