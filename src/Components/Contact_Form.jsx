import React from 'react'
import Design3 from './Designs Folder/Design3'
import Design4 from './Designs Folder/Design4'

const Contact_Form = () => {
  return (
    <>
      <div className=' w-full h-auto flex justify-center items-center bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] px-5 2xl:px-16 py-10 2xl:py-20'>
        <div className=' w-full flex flex-col items-center justify-center gap-12 text-white'>
          <h1 className=' text-4xl xl:text-6xl font-medium underline xl:no-underline '>Contact me</h1>

          {/* Contact form */}
          <div className=' w-full flex justify-center items-center lg:justify-between'>
            <Design3 />
            <form action="POST" className=' w-full sm:w-[450px] xl:w-[550px] flex flex-col gap-8 items-center justify-center'>
              <div className=' w-full flex flex-col gap-3'>
                <label htmlFor="name" className=' px-5 text-lg font-bold'>Full name *</label>
                <input type='text' name='name' placeholder='Enter your full name ...' className=' focus:outline-none bg-[#20081f] placeholder:opacity-70 rounded-full py-2 sm:py-3 px-5'></input>
              </div>
              <div className=' w-full flex flex-col gap-3'>
                <label htmlFor="email" className=' px-5 text-lg font-bold'>Email *</label>
                <input type='email' name='email' placeholder='Enter your email ...' className=' focus:outline-none bg-[#20081f] placeholder:opacity-70 rounded-full py-2 sm:py-3 px-5'></input>
              </div>
              <div className=' w-full flex flex-col gap-3'>
                <label htmlFor="message" className=' px-5 text-lg font-bold'>Message *</label>
                <textarea name="message" placeholder='Enter your message ...' rows={5} className=' focus:outline-none bg-[#20081f] placeholder:opacity-70 rounded-3xl py-2 sm:py-3 px-5'></textarea>
              </div>
              <button type='submit' className=' px-10 py-2 text-lg font-bold rounded-full hover:opacity-60 duration-300 bg-[#cf17b8]'>Submit</button>
            </form>
            <Design4 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact_Form