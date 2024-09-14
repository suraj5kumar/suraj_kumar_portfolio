import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home_page from './Pages/Home_page'

const App = () => {
  Aos.init()
  return (
    <>
      <Home_page />
    </>
  )
}

export default App