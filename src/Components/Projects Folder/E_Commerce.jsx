import React from 'react'

const E_Commerce = () => {
  return (
    <>
      <div className=' flex items-center'>
        <div className=' flex flex-col justify-center items-center lg:flex-row lg:items-start'>
          {/* Image */}
          <a href="https://happy-e-store.netlify.app/" target='_blank'>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex justify-center items-end w-[340px] h-[200px] bg-[#564484] rounded-xl sm:w-[450px] sm:h-[250px] lg:h-[280px] xl:w-[550px] xl:h-[300px] xl:pl-5 overflow-hidden'>
              <img src="/Images/e-commerce1.png" className=' h-36 sm:h-52 lg:h-56 xl:h-60 skew-x-3 rotate-3 -mb-2 lg:-mb-4' />
              <img src="/Images/e-commerce2.png" className=' h-40 sm:h-52 lg:h-60 xl:h-68 z-10 shadow-shadow2 shadow-black' />
              <img src="/Images/e-commerce3.png" className=' h-36 sm:h-52 lg:h-56 xl:h-60 -skew-x-3 -rotate-3 -mb-2 lg:-mb-4' />
            </div>
          </a>

          {/* Project Details and link */}
          <div className=' pt-3 flex flex-col items-center text-white'>
            {/* Project Details */}
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex flex-col items-center lg:items-start lg:relative lg:right-6 lg:pt-20 xl:pt-24 xl:right-8'>
              <h1 className=' text-lg font-bold md:text-2xl xl:text-3xl'>E-Commerce</h1>
              <p className=' md:text-xl xl:text-2xl'>June 2024</p>
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

export default E_Commerce