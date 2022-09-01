import React, { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
import arrow from '../../assets/images/arrow.png'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineExternalLink} from "react-icons/hi"
import {TiArrowLeftOutline} from "react-icons/ti"
import {TiArrowRightOutline} from "react-icons/ti"
//Media
import Video from '../../assets/videos/video2.mp4'
import NetflixClone from '../../assets/images/1.png'
import LandingPage from '../../assets/images/2.png'
import ConectSite from '../../assets/images/3.png'
import BankApp from '../../assets/images/4.png'
import Flamengo from '../../assets/images/5.png'
import FoodDelivery from '../../assets/images/6.png'
import Crud from '../../assets/images/7.png'
//Components
import {ProjectsContainer,
  Glass,
  VideoContainer,
  VideoBg,
  Image,
  Item,
  ProjectsCarousel2,
  ImageContainer,
  ProjectsCarousel,
  ArrowContainer,
  ArrowLeft, 
  ArrowRight, 
  Arrow, 
  TitleContainer, 
  Title, 
  Description,
  Content,
  ProjectTitle,
  Links} from './ProjectsElements.js'

const Projects = () => {

  const carousel = useRef(null)

  const handleLeft = (e)=>{
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= (carousel.current.offsetWidth/3)
  }
  const handleRight = (e)=>{
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += (carousel.current.offsetWidth/3)
  }
  
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opaticy:0}}

    style
    >
       <VideoContainer>
            <VideoBg autoPlay={true} loop muted src={Video} type='video/mp4'/>
         </VideoContainer>

   <ProjectsContainer>
<Glass>
  
      <TitleContainer>
        <Title> My projects</Title>
        <Description>These are some of the projects that I have developed</Description>
      </TitleContainer>
  
      <ProjectsCarousel >
        <Arrow onClick={handleLeft}><TiArrowLeftOutline size={40} style={{color: '#fff'}}/></Arrow>
        <ProjectsCarousel2 ref={carousel}>
  
          <Item >
            <ImageContainer>
              <Image src={NetflixClone} alt='image'/>
            </ImageContainer>
  
            <Content>
              <ProjectTitle>
                Netflix clone
              </ProjectTitle>
  
              <Links href='https://jlins-netflixclone.netlify.app/'> <HiOutlineExternalLink size={40} style={{color: '#fff'}}/> </Links>
              <Links href='https://github.com/juliolecy/Netflix-clone'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
          <Item >
            <ImageContainer>
              <Image src={BankApp} alt='image'/>
            </ImageContainer>
  
                <Content>
              <ProjectTitle>
                Bank app
              </ProjectTitle>
  
              <Links href='https://jlins-bankapp.netlify.app/'> <HiOutlineExternalLink style={{color: '#fff'}}/> </Links>
  
              <Links href='https://github.com/juliolecy/bank-app'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
                <Item >
            <ImageContainer>
              <Image src={FoodDelivery} alt='image'/>
            </ImageContainer>
  
            <Content>
              <ProjectTitle>
                Food Delivery
              </ProjectTitle>
  
              <Links href='https://github.com/juliolecy/food-delivery'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
  
          <Item >
            <ImageContainer>
              <Image src={Flamengo} alt='image'/>
            </ImageContainer>
  
            <Content>
              <ProjectTitle>
                CRF page transitions
              </ProjectTitle>
  
              <Links href='https://flamengoatemorrer.netlify.app/'> <HiOutlineExternalLink size={40} style={{color: '#fff'}}/> </Links>
  
              <Links href='https://github.com/juliolecy/flamengo-page-transitions'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
          <Item >
            <ImageContainer>
              <Image src={Crud} alt='image'/>
            </ImageContainer>
  
            <Content>
              <ProjectTitle>
                Contact book
              </ProjectTitle>
              <Links href='https://github.com/juliolecy/contact-book'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
          <Item >
            <ImageContainer>
              <Image src={ConectSite} alt='image'/>
            </ImageContainer>
  
            <Content>
              <ProjectTitle>
                Landing Page
              </ProjectTitle>
              <Links href='https://jlins-connectsite.netlify.app/'>
            <HiOutlineExternalLink size={40} style={{color: '#fff'}}/>
              </Links>
              <Links href='
                github.com/juliolecy/Projeto-9-Aprendendo-Bootstrap
  .'>
            <AiFillGithub size={40} style={{color: '#fff'}}/>
              </Links>
            </Content>
          </Item>
  
  
  
  
        </ProjectsCarousel2>
        <Arrow onClick={handleRight}><TiArrowRightOutline size={40} style={{color: '#fff'}}/></Arrow>
      </ProjectsCarousel>
  
  
  
      <ArrowContainer>
  
      </ArrowContainer>
</Glass>
   </ProjectsContainer>
   </motion.div>
  )
}

export default Projects