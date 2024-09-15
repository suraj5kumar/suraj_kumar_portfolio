import React from 'react'
import Warme from './Projects Folder/Warme'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const service = () => {
    navigate('/service')
  }
  return (
    <>
      <div className=' w-full flex overflow-x-hidden justify-center items-center bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] py-10 2xl:py-20 px-5 xl:px-10'>
        <div className=' w-full flex flex-col gap-10 lg:gap-20 items-center justify-center'>
          <div className=' w-full flex justify-center xl:justify-end xl:px-28 2xl:px-64'>
            <h1 className=' text-4xl xl:text-6xl text-white font-medium underline xl:no-underline'>My Services</h1>
          </div>
          <div className=' w-full flex flex-col items-center justify-center gap-2 lg:gap-5'>
            <Warme />
            <div className=' w-full text-white sm:px-20 lg:px-28 2xl:px-52 lg:text-lg'>
              <p>Made the full fronted of the website for an NGO. Client wanted to add different choices for payment.
                Added 2 different payment choices for people to make donation. They can choose one-time-payment or monthly subscription based payment
                according to their choice and ease. Used responsive design principles to make the website interactive for people.
                Successfully integrated the payment system working with my backend team. Whenever people will make donations
                it will directly go to the NGO's account immediately.
              </p>
            </div>
          </div>

          <button onClick={service} className=' text-[#cb17b7] font-bold text-lg xl:text-xl'>Service/Collaboration Request &gt;&gt;</button>
        </div>
      </div>
    </>
  )
}

export default Services