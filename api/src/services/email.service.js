import boom from "@hapi/boom";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { email, emailWithButton } from "../tools/build";

dotenv.config();

class LoginService {
  constructor() {}

  async sendEmail(data) {
    const {
      subject,
      logoURL,
      remitterName,
      recieverEmails,
      title,
      subTitle,
      body,
      buttonLink,
      buttonText,
      footer,
      legal,
    } = data;

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: process.env.API_SMTP_HOST,
      port: process.env.API_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.API_SMTP_USER,
        pass: process.env.API_SMTP_PASS,
      },
    });

    let html = "";
    
    if (buttonLink) {
      html = emailWithButton({
        title,
        subTitle,
        logoURL,
        subject,
        body,
        buttonLink,
        buttonText,
        footer,
        legal,
      });
    } else {
      html = email({
        title,
        subTitle,
        logoURL,
        subject,
        body,
        footer,
        legal,
      });
    }

    const obj = await transporter.sendMail({
      from: `"${remitterName}" <${process.env.API_SMTP_USER}>`,
      to: `${recieverEmails}`,
      subject,
      text: body,
      html,
    });

    if(!obj){
      throw boom.conflict()
    }

    return obj;
  }
}

export default LoginService;
