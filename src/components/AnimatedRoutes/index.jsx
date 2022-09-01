import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
//Pages
import Hero from '../../pages/Hero'
import About from '../../pages/About'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Error from '../../pages/Error'

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Error/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes