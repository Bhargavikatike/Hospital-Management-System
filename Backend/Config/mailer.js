import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

export const emailFrom =
  process.env.EMAIL_FROM || process.env.EMAIL_USER;

const smtpPort =
  Number(process.env.EMAIL_PORT || 2525);

export const mailerTransporter =
  nodemailer.createTransport({

    host:
      process.env.EMAIL_HOST ||
      "smtp-relay.brevo.com",

    port:
      smtpPort,

    secure:
      smtpPort === 465,

    requireTLS:
      smtpPort !== 465,

    auth: {

      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS

    },

    connectionTimeout:
      Number(process.env.EMAIL_CONNECTION_TIMEOUT || 10000),

    greetingTimeout:
      Number(process.env.EMAIL_GREETING_TIMEOUT || 10000),

    socketTimeout:
      Number(process.env.EMAIL_SOCKET_TIMEOUT || 15000)

  });

export const verifyEmailTransporter = async () => {

  try {

    await mailerTransporter.verify();

    console.log("Email transporter is ready");

  }

  catch (error) {

    console.log(
      "EMAIL TRANSPORTER VERIFY ERROR:",
      error.message
    );

  }

};
