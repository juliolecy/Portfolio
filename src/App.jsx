import React, {useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'

// Components 
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

const Home = () => {

    const [Open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!Open)
    }

    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
      const scrollListener = ()=>{
        if(window.scrollY > 20){
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
      window.addEventListener('scroll', scrollListener);
      return()=>{
        window.removeEventListener('scroll', scrollListener);
      }
  
    },[]);

  return (
    <Router>
    <Sidebar Open={Open} toggle={toggle}/>
    <Navbar scrolled={scrolled} toggle={toggle}/>
    <AnimatedRoutes/>
    <Footer/>
    </Router>
  )
}

export default Home;