import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import ThoughtOfTheDay from '../Components/ThoughtOfTheDay'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import { Element } from 'react-scroll'
const Home_page = () => {

  return (
    <>
      <Navbar />
      <Element name='home'>
        <section>
          <Home />
        </section>
      </Element>
      <ThoughtOfTheDay />
      <Element name='about_me'>
        <section>
          <AboutMe />
        </section>
      </Element>
      <Element name='skills'>
        <section>
          <Skills />
        </section>
      </Element>
      <Element name='projects'>
        <section>
          <Projects />
        </section>
      </Element>
    </>
  )
}

export default Home_page