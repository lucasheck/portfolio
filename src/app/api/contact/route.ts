import { NextRequest, NextResponse } from 'next/server'
import { mailOptions, transporter } from '../../lib/nodemailer'

export async function POST(request: NextRequest) {
  const json = await request.json()
  const { name, email, message } = json

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New portfolio message - from ${name}`,
      text: '',
      html: `<h3>Portfolio Message</h3><br/><span>From: ${name}</span><br/><span>Email: ${email}</span><br/><p>${message}</p>`,
    })

    return NextResponse.json({
      status: 200,
    })
  } catch (error) {
    return NextResponse.json({
      status: 400,
    })
  }
}

export async function GET(request: NextRequest) {
  console.log(request.headers)
  return NextResponse.json({ message: 'Server running!' }, { status: 200 })
}
