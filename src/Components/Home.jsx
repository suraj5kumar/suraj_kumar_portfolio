import React, { useEffect, useRef, useContext } from 'react'
import { Download04Icon, Linkedin02Icon, Github01Icon } from 'hugeicons-react'
import Typed from 'typed.js'
import Context from '../Context/ContextFile'
import Hire_me from './Hire_me'

const Home = () => {
  const element = useRef(null)
  const { sethire } = useContext(Context)

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['Frontend Developer', 'Web Developer', 'React.js Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 500,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Hire_me />

      <div className=' pt-16 w-full h-auto flex bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] lg:pt-48 xl:pt-52 2xl:pt-64'>
        <div className=' w-full flex flex-col gap-24 px-5 sm:px-20 lg:flex-row lg:pr-5 xl:pl-40 2xl:justify-between 2xl:pl-[270px] 2xl:pr-20'>
          {/* Name and Details */}
          <div className=' flex flex-col text-white pt-10 lg:pt-20 2xl:pt-14'>
            <div className=' flex items-center text-2xl opacity-60 2xl:text-3xl'>
              <p ref={element} />
            </div>
            <h1 className=' text-6xl font-medium'>Suraj Kumar</h1>
            <h1 className=' border-l-2 text-xl pl-5 pr-10 mt-8 opacity-60 sm:pr-48 lg:pr-40 xl:mt-10 2xl:w-72 2xl:pr-0'>I'm a Front-End Developer and I am looking for a full time role.</h1>
            {/* Hire Me button */}
            <div className=' w-full pt-5 px-6'>
              <button onClick={() => sethire(true)} className=' text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm lg:text-base 2xl:text-lg px-5 py-2.5 text-center me-2 mb-2'>Hire me</button>
            </div>
          </div>
          <div className=' flex justify-between pt-10 lg:pt-24 xl:pt-10 xl:gap-20 2xl:gap-40'>
            {/* Image */}
            <div className=' relative flex justify-center items-center w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-r from-[#0c97e5] to-[#f842e8]' id='image_box'>
              <img src="Images/Suraj_Kumar.png" className=' absolute top-[-80px] h-[270px] sm:h-[370px] sm:top-[-110px] xl:h-[470px] xl:top-[-140px]' />
              {/* CV link */}
              <a href='https://drive.google.com/file/d/1Pxabm9IOgoUbVjq8imTqw-X8p9eVBSHy/view?usp=sharing' target='_blank' className=' w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] xl:h-[80px] xl:w-[80px] bg-[#d018b8] absolute top-5 -left-1 sm:top-7 xl:top-14 rounded-full animate-pulse flex flex-col justify-center items-center'>
                <Download04Icon
                  size={40}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                <h1 className=' text-xl font-medium text-white xl:text-2xl'>CV</h1>
              </a>
            </div>
            {/* Links for small screen */}
            <div className=' -mt-10 flex flex-col gap-5'>
              <a href="https://www.linkedin.com/in/web-developer-suraj-kumar/" target='_blank'>
                <Linkedin02Icon
                  size={40}
                  color={"#000000"}
                  variant={"stroke"}
                  className=' hover:text-white hover:opacity-20 duration-500'
                />
              </a>
              <a href="https://github.com/suraj5kumar" target='_blank'>
                <Github01Icon
                  size={40}
                  color={"#000000"}
                  variant={"stroke"}
                  className=' hover:text-white hover:opacity-20 duration-500'
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home