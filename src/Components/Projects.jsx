import React from 'react'
import Warme from './Projects Folder/Warme'
import Dream11_Landing_Page from './Projects Folder/Dream11_Landing_Page'
import Design1 from './Design1'
import Widgets_Dashboard from './Projects Folder/Widgets_Dashboard'
import E_Commerce from './Projects Folder/E_Commerce'
import Design2 from './Design2'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  const all_projects = () => {
    navigate("/all_projects")
  }
  return (
    <>
      <div className=' w-full h-auto flex flex-col gap-10 px-5 py-10 md:px-16 xl:py-20 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] overflow-x-hidden'>
        <div className=' w-full flex flex-col gap-10 lg:gap-20 justify-center items-center'>
          <div className=' w-full flex justify-center xl:justify-start xl:px-28 2xl:px-60'>
            <h1 className=' text-4xl xl:text-6xl text-white font-medium underline xl:no-underline'>My Projects</h1>
          </div>

          {/* Projects */}
          <div className=' lg:relative w-full flex flex-col items-center justify-center gap-10 lg:gap-20'>
            {/* Project 1 */}
            <Warme />
            {/* Design 1 */}
            <div className=' absolute left-12 lg:top-[360px] xl:left-10 xl:top-[380px] 2xl:left-40 '>
              <Design1 />
            </div>
            {/* Project 2 */}
            <div className=' lg:pl-56 xl:pl-96 2xl:pl-80'>
              <Widgets_Dashboard />
            </div>
            {/* Project 3 */}
            <div className=' lg:pr-56 xl:pr-64'>
              <E_Commerce />
            </div>
            {/* Design 2 */}
            <div className=' absolute right-36 top-[970px] xl:top-[1000px] 2xl:right-64'>
              <Design2 />
            </div>
            {/* Project 4 */}
            <Dream11_Landing_Page />
          </div>

          {/* More projects button */}
          <button onClick={all_projects} className=' text-[#cb17b7] font-bold text-lg xl:text-xl'>See More Projects &gt;&gt;</button>
        </div>
      </div>
    </>
  )
}

export default Projects