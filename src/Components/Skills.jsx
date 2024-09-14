import React from 'react'
import { ArrowLeft02Icon } from 'hugeicons-react'

const Skills = () => {
  return (
    <>
      <div className=' w-full h-auto flex flex-col gap-10 px-5 py-10 md:px-16 xl:py-20 2xl:py-10 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938]'>
        <div className=' flex flex-col gap-5 items-center xl:items-end xl:px-28 2xl:px-60'>
          <h1 className=' text-4xl xl:text-6xl text-white font-medium underline xl:no-underline'>My Skills</h1>
          <ArrowLeft02Icon
            size={100}
            color={"#d217b8"}
            variant={"stroke"}
            className=' hidden xl:block xl:w-96'
          />
        </div>
        <div className=' flex flex-wrap gap-10 w-full sm:justify-center lg:justify-start lg:pl-7 xl:pl-28 2xl:pl-16'>
          {/* Frontend */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Front-end Development</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">HTML</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">CSS</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">JavaScript</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">React.js</li>
            </ul>
          </div>
          {/* CSS Frameworks */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>CSS Frameworks</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">Tailwind CSS</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">Bootstrap</li>
            </ul>
          </div>
          {/* Backend */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Back-end Development</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">Python</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">Django (Learning)</li>
            </ul>
          </div>
          {/* Database */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Database</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">SQL (Basic)</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">MongoDB (Basic)</li>
            </ul>
          </div>
          {/* Version Control */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Version Control</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">GIT</li>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">GitHub (Basic)</li>
            </ul>
          </div>
          {/* Data Analysis */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Data Analysis</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">PowerBI (Basic)</li>
            </ul>
          </div>
          {/* Other Technologies */}
          <div className=' flex flex-col text-[#c67ede] rounded-lg gap-5 py-3 px-3 w-[350px] h-[200px] sm:w-[400px] xl:w-[450px] 2xl:w-[400px] bg-gradient-to-bl from-[#973a80] via-[#4f196b] to-[#140814]'>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' w-full pl-5 text-lg sm:text-xl font-bold'>Other Technologies</h1>
            <ul className=' w-full list-disc pl-3'>
              <li
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-once="false">Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills