'use client'
import Image from 'next/image'

import LineBtn from '../../assets/btnLine.svg'
import sendMessageIcon from '../../assets/sendMessage.svg'
import LoadSpinner from '../../assets/spinner.svg'
import { IEmailProps, sendContactForm } from '../../lib/api'
import { ChangeEvent, FormEvent, useState } from 'react'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') setNameError(false)
    setName(e.target.value)
  }
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') setEmailError(false)
    setEmail(e.target.value)
  }
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== '') setMessageError(false)
    setMessage(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailPattern.test(email)

    if (name.trim() === '') setNameError(true)
    if (email.trim() === '' || !isValidEmail) setEmailError(true)
    if (message.trim() === '') setMessageError(true)

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      message.trim() === '' ||
      !isValidEmail
    ) {
      setIsLoading(false)
    } else {
      const data: IEmailProps = {
        name,
        email,
        message,
      }
      const response = await sendContactForm(data)

      if (response.status === 200) {
        alert(response.message)
        window.location.href = '/'
      } else {
        alert(response.message)
      }
      setIsLoading(false)
    }
  }
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-full flex-col items-center justify-center gap-5 after:absolute after:h-1 after:w-4/5 after:translate-y-48 after:bg-primary_400 after:content-['']"
        >
          <div className="flex w-full max-w-[640px] flex-col flex-wrap justify-center gap-2 sm:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <input
                type="text"
                className={
                  nameError
                    ? 'min-h-[40px] flex-1 rounded border-2 border-red-400 pl-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear focus:shadow-inputShadowFocus focus:outline-none'
                    : 'min-h-[40px] flex-1 rounded pl-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear focus:shadow-inputShadowFocus focus:outline-none'
                }
                placeholder="Your Name"
                value={name}
                onChange={(e) => handleChangeName(e)}
              />
              <span className={nameError ? 'text-red-500' : 'opacity-0'}>
                Field name is required.
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <input
                type="text"
                className={
                  emailError
                    ? "flex min-h-[40px] flex-1 rounded border-2 border-red-400 pl-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear after:absolute after:bottom-0 after:left-0 after:h-4 after:w-10 after:bg-green-300 after:content-['*'] focus:shadow-inputShadowFocus focus:outline-none"
                    : 'min-h-[40px] flex-1 rounded pl-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear focus:shadow-inputShadowFocus focus:outline-none'
                }
                placeholder="Your Email"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
              />
              <span className={emailError ? 'text-red-500' : 'opacity-0'}>
                Please enter a valid e-mail.
              </span>
            </div>
            <div className="flex h-40 w-full  flex-col gap-1">
              <textarea
                className={
                  messageError
                    ? 'h-40 w-full resize-none rounded border-2 border-red-400 p-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear focus:shadow-inputShadowFocus focus:outline-none'
                    : 'h-40 w-full resize-none rounded p-4 text-primary_400 shadow-inputShadow transition duration-300 ease-linear focus:shadow-inputShadowFocus focus:outline-none'
                }
                placeholder="Your Message..."
                value={message}
                onChange={(e) => handleChangeMessage(e)}
              ></textarea>
              <span className={messageError ? 'text-red-500' : 'opacity-0'}>
                Field message is required.
              </span>
            </div>
          </div>
          {isLoading ? (
            <div
              className="flex h-11 w-44 cursor-default items-center justify-center rounded-[25px] bg-blue-800 text-white transition duration-700 ease-linear"
              onClick={() => setIsLoading(!isLoading)}
            >
              <Image
                src={LoadSpinner}
                alt="Loading Spinner"
                className="animate-spin"
              />
            </div>
          ) : (
            <button
              className="flex h-11 w-44 items-center justify-evenly rounded-[25px] bg-accent_600 text-white shadow-btnShadow transition duration-300 ease-linear hover:bg-accent_800"
              type="submit"
            >
              <Image
                src={sendMessageIcon}
                alt="Letter Icon"
                className="h-5 w-auto"
              />
              <Image src={LineBtn} alt="Line" className="h-8 w-auto" />
              Send message
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
