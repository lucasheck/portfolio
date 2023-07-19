import { NextRequest, NextResponse } from 'next/server'
import { mailOptions, transporter } from '../../lib/nodemailer'

export async function POST(request: NextRequest) {
  const json = await request.json()
  const { name, email, message } = json

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          ...mailOptions,
          subject: `New portfolio message - from ${name}`,
          text: '',
          html: `<h3>Portfolio Message</h3><br/><span>From: ${name}</span><br/><span>Email: ${email}</span><br/><p>${message}</p>`,
        },
        (err: any, info: any) => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            console.log(info)
            resolve(info)
          }
        },
      )
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
