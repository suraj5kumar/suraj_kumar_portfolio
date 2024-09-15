import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className=' w-full h-auto py-20 xl:py-10 2xl:py-20 gap-20 px-5 xl:px-10 xl:gap-10 flex flex-col xl:flex-row justify-between items-center text-white bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938]'>
        <div className=' xl:w-2/4 flex flex-col justify-center items-center gap-10'>
          <h1 className=' text-4xl xl:text-6xl font-medium underline xl:pl-20 2xl:pl-56'>About Me</h1>

          {/* Details */}
          <div className=' flex flex-col gap-5 text-xl sm:px-10 lg:px-20 xl:px-0 xl:pl-20 2xl:pl-56'>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false">
              Hello! My name is Suraj Kumar, and I'm a passionate frontend developer with a strong foundation in
              HTML, CSS, JavaScript, and React.js. I also have experience with Node.js, Python, SQL, MongoDB, GIT,
              Github, and Wordpress. I graduated with a B.Tech degree, and currently, I'm working part-time as a
              Technical Support Engineer-Python at Codingwise, a coding institute where I help students with their
              coding queries. Additionally, I work as a freelance frontend developer with Lokesh.Dev, a startup
              where I develop websites for various projects.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false">
              I'm actively looking for full-time opportunities where I can contribute my skills to help the organization
              and grow as a developer as well. I love creating intuitive, dynamic, and responsive web applications,
              and I'm always eager to learn new technologies and improve my craft.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="false">
              In my free time, I enjoy exploring the latest trends in web development and working on personal projects
              to sharpen my skills. Feel free to reach out to me if you have any opportunities, projects or
              just want to connect!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className=' xl:w-2/4 flex justify-center items-center'>
          <div className=' bg-[url(/Images/Laptop.jpg)] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] bg-cover bg-center rounded-full'>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe