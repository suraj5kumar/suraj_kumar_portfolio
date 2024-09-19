import React from 'react'
import Design5 from './Designs Folder/Design5'
import { Linkedin02Icon, GithubIcon, InstagramIcon } from 'hugeicons-react'

const FollowMe = () => {
  return (
    <>
      <div className=' w-full h-auto flex justify-center items-center px-5 2xl:px-16 py-10 2xl:py-20'>
        <div className=' w-full flex items-center'>
          <div className=' w-full flex flex-col text-white gap-5 md:gap-0 md:flex-row md:justify-between md:items-center'>
            <div className=' flex flex-col gap-5'>
              <h1 className=' text-4xl xl:text-6xl font-medium'>Follow Me</h1>
              <Design5 />
            </div>
            <div className=' flex gap-7'>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/web-developer-suraj-kumar/" target='_blank'>
                <div className=' p-3 bg-[#d017b8] hover:opacity-70 duration-300 rounded-full'>
                  <Linkedin02Icon
                    size={30}
                    color={"#000000"}
                    variant={"stroke"}
                  />
                </div>
              </a>
              {/* Github */}
              <a href="https://github.com/suraj5kumar" target='_blank'>
                <div className=' p-3 bg-[#d017b8] hover:opacity-70 duration-300 rounded-full'>
                  <GithubIcon
                    size={30}
                    color={"#000000"}
                    variant={"stroke"}
                  />
                </div>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/suraj_17_98/" target='_blank'>
                <div className=' p-3 bg-[#d017b8] hover:opacity-70 duration-300 rounded-full'>
                  <InstagramIcon
                    size={30}
                    color={"#000000"}
                    variant={"stroke"}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FollowMe