import React from 'react'
import Warme from './Projects Folder/Warme'
import Dream11_Landing_Page from './Projects Folder/Dream11_Landing_Page'
import Design1 from './Design1'

const Projects = () => {
  return (
    <>
      <div className=' w-full h-auto flex flex-col gap-10 px-5 py-10 md:px-16 xl:py-20 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] overflow-x-hidden'>
        <div className=' w-full flex flex-col gap-10 lg:gap-20 justify-center items-center'>
          <div className=' w-full flex justify-center xl:justify-start xl:px-28 2xl:px-60'>
            <h1 className=' text-4xl xl:text-6xl text-white font-medium underline xl:no-underline'>My Projects</h1>
          </div>

          {/* Projects */}
          <div className=' w-full flex flex-col items-center justify-center gap-10 lg:gap-20'>
            <Warme />
            <div className=' absolute left-28 xl:left-24 xl:pt-20 2xl:left-56 '>
              <Design1 />
            </div>
            <Dream11_Landing_Page />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects