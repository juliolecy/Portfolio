import React, { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineExternalLink} from "react-icons/hi"
import {TiArrowLeftOutline} from "react-icons/ti"
import {TiArrowRightOutline} from "react-icons/ti"
//Media
import Video from '../../assets/videos/video2.mp4';

//Components
import * as k from './ProjectsElements.js'

const Projects = () => {




  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >

   <k.ProjectsContainer>

<k.Glass>

      <k.TitleContainer>
        <k.Title> My projects</k.Title>
        <k.Description>These are some of the projects that I have developed</k.Description>
      </k.TitleContainer>


</k.Glass>
   </k.ProjectsContainer>
   </motion.div>
  )
}

export default Projects