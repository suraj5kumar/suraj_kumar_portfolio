import React from 'react'

const Warme = () => {
  return (
    <>
      <div className=' flex items-center'>
        <div className=' flex flex-col justify-center items-center xl:flex-row xl:items-start'>
          {/* Image */}
          <a href="https://www.warmefoundation.org/" target='_blank'>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex justify-center items-end gap-1 w-[340px] h-[200px] bg-[#564484] rounded-xl sm:w-[450px] sm:h-[250px] xl:w-[550px] xl:justify-start xl:pl-5'>
              <img src="/Images/warme1.png" className=' h-36 sm:h-52' />
              <img src="/Images/warme2.png" className=' h-36 sm:h-52' />
              <img src="/Images/warme3.png" className=' h-36 sm:h-52' />
            </div>
          </a>

          {/* Project Details and link */}
          <div className=' pt-3 flex flex-col items-center text-white'>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex flex-col items-center xl:items-start xl:relative xl:right-12'>
              <h1 className=' text-lg font-bold md:text-2xl xl:text-4xl'>Warme Charitable Foundation</h1>
              <p className=' md:text-xl xl:text-3xl'>May 2024</p>
            </div>
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

export default Warme