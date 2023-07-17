import nodemailer from 'nodemailer'

const email = process.env.email
const password = process.env.password

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
})

export const mailOptions = {
  from: email,
  to: email,
}
