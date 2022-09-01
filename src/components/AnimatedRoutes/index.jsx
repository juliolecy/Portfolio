import {Route, Routes, useLocation} from 'react-router-dom'

import React from 'react'
import Hero from '../Hero'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Error from '../Error'

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