import React from 'react'

const Widgets_Dashboard = () => {
  return (
    <>
      <div className=' flex items-center'>
        <div className=' flex flex-col justify-center items-center lg:flex-row-reverse lg:items-end'>
          {/* Image */}
          <a href="https://widgetsdashboard.netlify.app/" target='_blank'>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex justify-center items-end w-[240px] h-[240px] bg-[#2e2d3c] rounded-xl sm:w-[400px] sm:h-[400px] overflow-hidden'>
              <div className=' w-full flex flex-col pt-10 gap-4 -rotate-[30deg]'>
                <div className=' flex gap-4 pl-6 sm:pl-10 lg:pl-20'>
                  <img src="/Images/widgets1.png" className=' h-20 rounded-md sm:h-32' />
                  <img src="/Images/widgets2.png" className=' h-20 rounded-md sm:h-32' />
                </div>
                <div className=' flex gap-4 -ml-8'>
                  <img src="/Images/widgets3.png" className=' h-20 rounded-md sm:h-32' />
                  <img src="/Images/widgets4.png" className=' h-20 rounded-md sm:h-32' />
                </div>
              </div>
            </div>
          </a>

          {/* Project Details and link */}
          <div className=' pt-3 flex flex-col items-center text-white'>
            {/* Project Details */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false"
              className=' flex flex-col items-center lg:items-end lg:relative lg:left-8 lg:pb-16 2xl:left-8'>
              <h1 className=' text-lg font-bold md:text-2xl xl:text-3xl'>Dashboard</h1>
              <p className=' md:text-xl xl:text-2xl'>August 2024</p>
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

export default Widgets_Dashboard