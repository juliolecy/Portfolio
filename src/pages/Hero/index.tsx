import React from 'react'
import {motion} from 'framer-motion'
import Cv from '../../assets/data/curriculo.pdf'
import * as k from './HeroElements.js'
import Video from '../../assets/videos/VideoBg.mp4';
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import { FaBars } from "react-icons/fa";

const  Hero= () => (
   <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opacity:0}}
   >
      <k.HeroContainer>

         <k.HeroContent>
            <k.HeroSpan>Hi</k.HeroSpan>
            <k.HeroSpan>My name is <k.StrokeText>Julio Cesar</k.StrokeText></k.HeroSpan>
            <k.HeroSpan>I am a</k.HeroSpan>
            <k.HeroGlitch data-text='DEVELOPER'>Developer</k.HeroGlitch>
         </k.HeroContent>



        <k.ButtonContainer>
            <k.Button>
                <a href={Cv} download={true} type='application/pdf'>Download CV</a>
            </k.Button>
        </k.ButtonContainer>



         <k.SMContainer>
                <k.SMLink href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={70} style={{color: '#fff'}} /></k.SMLink>
                <k.SMLink href='https://github.com/juliolecy'><AiFillGithub size={60} style={{color: '#fff'}} /></k.SMLink>
         </k.SMContainer>

      </k.HeroContainer>
   </motion.div>


);



export default Hero;