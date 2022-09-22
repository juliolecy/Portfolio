import React, {useState, useEffect} from 'react'
import * as k from './styles/global.styles'
import './styles/global.styles.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Video from './assets/videos/VideoBg.mp4'
// Components
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

const Home = () => {

    const [Open, setOpen] = useState<boolean>(false)

    const toggle = ():void => {
        setOpen(!Open)
    }

    const [scrolled, setScrolled] = useState<boolean>(false)

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
         <k.Background>
            <k.VideoBg autoPlay={true} loop muted src={Video}/>
         </k.Background>
    <Sidebar Open={Open} toggle={toggle}/>
    <Navbar scrolled={scrolled} toggle={toggle}/>
                <AnimatedRoutes/>
    <Footer/>
    </Router>
  )
}

export default Home;