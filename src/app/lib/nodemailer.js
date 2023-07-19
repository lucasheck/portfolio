import nodemailer from 'nodemailer'

const email = process.env.email
const password = process.env.password

export const transporter = nodemailer.createTransport({
  port: 587,
  host: 'smtp.gmail.com',
  auth: {
    user: email,
    pass: password,
  },
  secure: false,
})

export const mailOptions = {
  from: email,
  to: email,
}
