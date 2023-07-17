'use client'
import Image from 'next/image'

import LineBtn from '../../assets/btnLine.svg'
import sendMessageIcon from '../../assets/sendMessage.svg'
// import { IEmailProps, sendContactForm } from '../../lib/api'
// import { useState } from 'react'

const Contact = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // const [emailForm, setEmailForm] = useState<IEmailProps>({
  //   name: 'Lucas Tomaz Heck',
  //   email: 'lucas@email.com',
  //   message:
  //     'Hi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat sit hic necessitatibus, atque esse repellendus accusantium ipsam nisi odio.',
  // })

  // const response = {
  //   status: 200,
  //   message: 'OK',
  // }
  // const submitHandler = async () => {
  //   setIsLoading(true)
  //   // const response = await sendContactForm(emailForm)
  //   if (response.status === 200) {
  //     /* MESSAGE SENT */
  //     console.log(response.message)
  //   } else {
  //     /* ERROR */
  //     console.log(response.message)
  //   }
  //   setIsLoading(false)
  // }
  return (
    <section id="contact" className="flex w-full justify-center px-[5%] pb-10">
      <div className="flex w-full flex-col items-center gap-14">
        <h2
          className="text-5xl font-semibold -tracking-wider 
          before:absolute before:left-0 before:h-1 before:w-1/6 before:translate-x-[60%] before:translate-y-5 before:rounded-full before:bg-primary_400 before:opacity-0 before:content-[''] 
          after:absolute after:right-0 after:h-1 after:w-1/6 after:-translate-x-[60%] after:translate-y-5 after:rounded-full after:bg-primary_400 after:opacity-0 after:content-[''] 
          sm:before:opacity-100 sm:after:opacity-100 lg:text-7xl lg:before:translate-y-10 lg:after:translate-y-10"
        >
          Let&#39;s talk?
        </h2>
        <form className="flex w-full flex-col items-center justify-center gap-5 after:absolute after:h-1 after:w-4/5 after:translate-y-48 after:bg-primary_400 after:content-['']">
          <div className="flex w-full max-w-[640px] flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <input
              type="text"
              className="min-h-[40px] flex-1 rounded pl-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="min-h-[40px] flex-1 rounded pl-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Email"
            />
            <textarea
              className="h-40 w-full resize-none rounded p-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Message..."
            ></textarea>
          </div>
          <button
            className="flex h-11 w-44 items-center justify-evenly rounded-[25px] bg-accent_600 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
            type="button"
            // onClick={submitHandler}
          >
            <Image
              src={sendMessageIcon}
              alt="Letter Icon"
              className="h-5 w-auto"
            />
            <Image src={LineBtn} alt="Line" className="h-8 w-auto" />
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
