import nodemailer from 'nodemailer'

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  secure: true,
})

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
}
