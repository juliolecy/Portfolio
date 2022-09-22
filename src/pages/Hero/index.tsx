import React, {useEffect} from 'react'
import {motion} from 'framer-motion'
import Cv from '../../assets/data/curriculo.pdf'
import * as k from './styles.js'
import Video from '../../assets/videos/VideoBg.mp4';
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import { FaBars } from "react-icons/fa";
import useAOS from "../../effects/useAos.js";

const  Hero= () =>{

    useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])

    return(
   <motion.div
   initial={{width:0}}
   animate={{width:'100%'}}
   exit={{x: window.innerWidth, transition: {duration:0.4}}}
   >
      <k.HeroContainer data-aos="fade-up">

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



      </k.HeroContainer>

         <k.SMContainer>
                <k.SMLink data-aos="fade-left"  data-aos-duration="2000" href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={70} style={{color: '#fff'}} /></k.SMLink>
                <k.SMLink data-aos="fade-left"  data-aos-duration="3000" href='https://github.com/juliolecy'><AiFillGithub size={60} style={{color: '#fff'}} /></k.SMLink>
         </k.SMContainer>
   </motion.div>


)}



export default Hero;