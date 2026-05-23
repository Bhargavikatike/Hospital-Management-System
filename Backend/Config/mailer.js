import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

export const emailFrom =
  process.env.EMAIL_USER;

export const mailerTransporter =
  nodemailer.createTransport({

    host: "smtp-relay.brevo.com",

    port: 587,

    secure: false,

    auth: {

      user: process.env.EMAIL_USER,

      pass: process.env.EMAIL_PASS

    }

  });