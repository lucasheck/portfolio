import Image from 'next/image'

import LineBtn from '../assets/btnLine.svg'
import sendMessageIcon from '../assets/sendMessage.svg'

const Contact = () => {
  return (
    <section id="contact" className="flex h-[60vh] w-full justify-center">
      <div className="flex w-1/2 flex-col items-center gap-14">
        <h2
          className="text-7xl font-semibold -tracking-wider 
          before:absolute before:left-0 before:h-1 before:w-1/5 before:translate-x-1/2 before:translate-y-10 before:rounded-full before:bg-primary_400 before:content-['']
          after:absolute after:right-0 after:h-1 after:w-1/5 after:-translate-x-1/2 after:translate-y-10 after:rounded-full after:bg-primary_400 after:content-['']"
        >
          Let&#39;s talk?
        </h2>
        <form className="flex w-full flex-col items-center justify-center">
          <div className="grid-col-2 grid w-4/5 gap-4">
            <input
              type="text"
              className="h-10 rounded pl-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="h-10 rounded pl-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Email"
            />
            <textarea
              className="col-span-2 h-40 resize-none rounded p-4 text-primary_400 shadow-inputShadow"
              placeholder="Your Message..."
            ></textarea>
          </div>
          <div className="mt-10 flex w-full justify-center after:absolute after:h-1 after:w-4/5 after:translate-y-24 after:bg-primary_400 after:content-['']">
            <button
              className="flex h-11 w-44 items-center justify-evenly rounded-[25px] bg-accent_400 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
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
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
