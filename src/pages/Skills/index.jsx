import React from 'react'
import styles from './style.css'
import img from '../../assets/img7.jpg'
import {motion} from 'framer-motion'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Node from '../../assets/node.png'

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
   <motion.div 
   initial={{width:0}} 
   animate={{width:'100%'}}
   exit={{x: window.innerWidth, transition: {duration:0.4}}}
     className='allpage' >
     
     {/* <div className="skills--container">

        
     
         <div className="skills">
          <h2>HTML</h2>
          <div className="progress--bar">
            <div className="html--bar"><span>98%</span></div>
          </div>
     
          <h2>CSS</h2>
          <div className="progress--bar">
            <div className="css--bar"><span>98%</span></div>
          </div>
          <h2>Javascript</h2>
          <div className="progress--bar">
            <div className="js--bar"><span>80%</span></div>
          </div>
          <h2>NodeJs</h2>
          <div className="progress--bar">
            <div className="node--bar"><span>80%</span></div>
          </div>
          <h2>ReactJs</h2>
          <div className="progress--bar">
            <div className="react--bar"><span>79%</span></div>
          </div>
        </div> 


      </div>  */}

              <Carousel responsive={responsive} infinite={true} className='skill--slider'>

                <div className='item'>
                  <img src={Node} alt="" />
                </div>

                <div className='item'>
                  <img src={Node} alt="" />
                </div>

                <div className='item'>
                  <img src={Node} alt="" />
                </div>

                <div className='item'>
                  <img src={Node} alt="" />
                </div>

                <div className='item'>
                  <img src={Node} alt="" />
                </div>

              </Carousel>
   </motion.div>
)}

export default Skills;