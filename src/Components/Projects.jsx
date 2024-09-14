import React from 'react'
import Warme from './Projects Folder/Warme'

const Projects = () => {
  return (
    <>
      <div className=' w-full h-auto flex flex-col gap-10 px-5 py-10 md:px-16 xl:py-20 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938]'>
        <div className=' w-full flex flex-col gap-20 justify-center items-center'>
          <div className=' w-full flex justify-center xl:justify-start xl:px-28 2xl:px-60'>
            <h1 className=' text-4xl xl:text-6xl text-white font-medium underline xl:no-underline'>My Projects</h1>
          </div>

          {/* Projects */}
          <div className=' w-full flex justify-center'>
            <Warme />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects