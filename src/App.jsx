import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home_page from './Pages/Home_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All_Projects_Page from './Pages/All_Projects_Page'
import Service_Page from './Pages/Service_Page'

const App = () => {
  Aos.init()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home_page />} ></Route>
          <Route exact path="/all_projects" element={<All_Projects_Page />}></Route>
          <Route exact path="/service" element={<Service_Page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App