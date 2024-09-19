import React, { useEffect, useState } from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
const Navbar = () => {
  const [menu, setmenu] = useState('home')
  const [hamburger, sethamburger] = useState(false)


  useEffect(() => {
    sethamburger(false)
  }, [menu])

  return (
    <>
      <div className=' w-full h-auto flex fixed top-0 justify-center items-center pt-3 pb-1 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] z-50' id="navbar">
        <div className=' w-[99%] px-5 sm:w-11/12 2xl:w-10/12 h-auto flex text-white justify-between items-center bg-gradient-to-r from-[#080808] to-[#0e0832] border-[#2c2864] lg:pl-8 lg:pr-1 border-2 py-1 xl:pl-10 rounded-full'>
          <Link to='home' smooth={true} duration={500}><button onClick={() => setmenu('home')} className=' lg:pr-10 xl:pr-14 2xl:mr-auto 2xl:pr-20'><h1 className=' text-2xl whitespace-nowrap font-bold'>Suraj Kumar</h1></button></Link>
          {/* Navbar at big screen */}
          <div className=' w-full items-center hidden lg:flex'>
            <div className=' flex items-center text-base xl:text-lg font-medium gap-5 xl:gap-7 2xl:gap-10'>
              <Link to='home' smooth={true} duration={500}><button onClick={() => setmenu('home')} className={` py-1.5 hover:border-b hover:border-[#f842e8] whitespace-nowrap`}>Home</button></Link>
              <Link to='about_me' smooth={true} duration={500}><button onClick={() => setmenu('about_me')} className={` py-1.5 hover:border-b hover:border-[#f842e8] whitespace-nowrap`}>About Me</button></Link>
              <Link to='skills' smooth={true} duration={500}><button onClick={() => setmenu('skills')} className={` py-1.5 hover:border-b hover:border-[#f842e8] whitespace-nowrap`}>Skills</button></Link>
              <Link to='projects' smooth={true} duration={500}><button onClick={() => setmenu('projects')} className={` py-1.5 hover:border-b hover:border-[#f842e8] whitespace-nowrap`}>Projects</button></Link>
              <Link to='services' smooth={true} duration={500}><button onClick={() => setmenu('services')} className={` py-1.5 hover:border-b hover:border-[#f842e8] whitespace-nowrap}`}>Services</button></Link>
            </div>
            {/* Contact me button */}
            <Link to='contact' smooth={true} duration={500} className=' ml-auto'><button onClick={()=>setmenu('contact')} className=' whitespace-nowrap ml-auto bg-[#4c266b] px-8 py-2 text-lg rounded-full font-bold hover:opacity-80'>Contact Me</button></Link>
          </div>
          {/* Hamburger button */}
          <div onClick={() => sethamburger(!hamburger)} className={` flex flex-col gap-2 cursor-pointer xl:hidden lg:hidden duration-500 ${hamburger === true ? 'rotate-[360deg]' : ''}`}>
            <div className={` ${hamburger === true ? 'rotate-45' : ''} ${hamburger === true ? 'absolute' : ''} h-1 duration-500 w-10 bg-slate-400 rounded-full`}></div>
            <div className={` ${hamburger === true ? 'rotate-45' : ''} h-1 duration-500 w-10 bg-slate-400 rounded-full`}></div>
            <div className={` ${hamburger === true ? '-rotate-45' : ''} ${hamburger === true ? 'absolute' : ''} h-1 duration-500 w-10 bg-slate-400 rounded-full`}></div>
          </div>
          {/* Hamburger menu for small screens */}
          <div className={` fixed flex-col justify-start ${hamburger === true ? 'left-[0%]' : 'left-[100%]'} lg:hidden items-start duration-500 pt-5 pl-7 top-14 gap-5 bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] h-full w-full sm:pl-14 md:pl-16`}>
            <div className=' flex flex-col gap-3 justify-start items-start text-base font-semibold pb-7'>
              <Link to='home' smooth={true} duration={500}><button onClick={() => setmenu('home')} className={` whitespace-nowrap hover:border-b hover:border-[#f842e8]`}>Home</button></Link>
              <Link to='about_me' smooth={true} duration={500}><button onClick={() => setmenu('about_me')} className={` whitespace-nowrap hover:border-b hover:border-[#f842e8]`}>About Me</button></Link>
              <Link to='skills' smooth={true} duration={500}><button onClick={() => setmenu('skills')} className={` whitespace-nowrap hover:border-b hover:border-[#f842e8]`}>Skills</button></Link>
              <Link to='projects' smooth={true} duration={500}><button onClick={() => setmenu('projects')} className={` whitespace-nowrap hover:border-b hover:border-[#f842e8]`}>Projects</button></Link>
              <Link to='services' smooth={true} duration={500}><button onClick={() => setmenu('services')} className={` whitespace-nowrap hover:border-b hover:border-[#f842e8]`}>Services</button></Link>
            </div>
            <Link to='contact' smooth={true} duration={500}><button onClick={()=>setmenu('contact')} className=' whitespace-nowrap bg-[#4c266b] px-8 py-2 text-lg rounded-full font-bold hover:opacity-80'>Contact Me</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar