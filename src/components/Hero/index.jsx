import React from 'react'
import {motion} from 'framer-motion'
import {HeroContainer, 
   VideoBg, 
   HeroBg, 
   HeroContent, 
   HeroSpan, 
   HeroGlitch, 
   StrokeText,
   BtnContainer,
   HeroBtn, 
   SMItem, 
   SMContainer, 
   SMLink, 
   SM} from './HeroElements.js'
import Video from '../../assets/videos/VideoBg.mp4'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import { FaBars } from "react-icons/fa";
import Button from '../../components/Button';

const  Hero= () => (
   <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opaticy:0}}
   >
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay={false} loop muted src={Video} type='video/mp4'/>
         </HeroBg>
         <HeroContent>
            <HeroSpan>Hi</HeroSpan>
            <HeroSpan>My name is <StrokeText>Julio Cesar</StrokeText></HeroSpan>
            <HeroSpan>I am a</HeroSpan>
            <HeroGlitch data-text='DEVELOPER'>Developer</HeroGlitch>
         </HeroContent>
      
         <BtnContainer>
            <HeroBtn> Download CV</HeroBtn>
         </BtnContainer>
      
         <SMContainer>
            <SM>
               <SMItem> <SMLink href='#'> <TiSocialLinkedinCircular size={70} style={{color: '#fff'}} /></SMLink> </SMItem>
               <SMItem> <SMLink href='#'><AiFillGithub size={60} style={{color: '#fff'}} /></SMLink></SMItem>
            </SM>
         </SMContainer>
      
      </HeroContainer>
   </motion.div>

   
);

       

export default Hero;