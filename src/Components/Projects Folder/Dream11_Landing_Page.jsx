import React from 'react'

const Dream11_Landing_Page = () => {
  return (
    <>
      <div className=' flex items-center'>
        <div className=' flex flex-col justify-center items-center lg:flex-row-reverse lg:items-end'>
          {/* Image */}
          <a href="https://suraj5kumar.github.io/Techplement/" target='_blank'>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex justify-center items-center gap-1 w-[340px] h-[200px] bg-[#2e2d3c] rounded-xl sm:w-[500px] sm:h-[250px] lg:w-[550px] lg:h-[280px] xl:w-[700px] xl:h-[300px] xl:pl-5 overflow-hidden'>
              <img src="/Images/dream111.png" className=' h-36 sm:h-48 shadow-shadow1 shadow-black xl:h-60 mt-auto' />
              <img src="/Images/dream112.png" className=' h-36 sm:h-48 shadow-shadow1 shadow-black xl:h-64 sm:ml-2 xl:ml-4 mb-auto' />
              <img src="/Images/dream113.png" className=' h-32 sm:h-40 xl:h-56' />
            </div>
          </a>

          {/* Project Details and link */}
          <div className=' pt-3 flex flex-col items-center text-white'>
            {/* Project name */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex flex-col items-center lg:items-end lg:relative lg:left-8 lg:pb-12 2xl:left-8'>
              <h1 className=' text-lg font-bold md:text-2xl xl:text-3xl'>Product Landing Page</h1>
              <p className=' md:text-xl xl:text-2xl'>April 2024</p>
            </div>
            {/* Links */}
            <div className=' hidden w-full justify-between'>
              <a href="https://www.warmefoundation.org/" target='_blank'><button className=' md:text-lg hover:opacity-50 duration-300 text-green-500'>Live Project</button></a>
              <button className=' md:text-lg hover:opacity-50 duration-300 text-blue-500'>Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dream11_Landing_Page