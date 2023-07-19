import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailFrom = process.env.email
const password = process.env.password

export async function POST(req: NextRequest, res: NextResponse) {
  console.log('mail/route API')
  const { name, email, message } = await req.json()
  console.log(name, email, message)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: emailFrom,
      pass: password,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  const mailData = {
    from: emailFrom,
    to: emailFrom,
    subject: `New portfolio message - from ${name}`,
    text: message,
    html: `<h3>Portfolio Message</h3><br/><span>From: ${name}</span><br/><span>Email: ${email}</span><br/><p>${message}</p>`,
  }

  try {
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err: any, info: any) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })
    return NextResponse.json({
      status: 200,
    })
  } catch (error) {
    return NextResponse.json({
      status: 500,
    })
  }
}
