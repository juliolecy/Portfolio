import React, { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
import {ProjectsContainer, Image,Item, ProjectsCarousel2, ImageContainer, ProjectsCarousel, ArrowContainer, ArrowLeft, ArrowRight, Arrow, TitleContainer, Title, Description} from './ProjectsElements.js'
import img from '../../assets/images/node.png'
import arrow from '../../assets/images/arrow.png'


const Projects = () => {

  const carousel = useRef(null)

  const handleLeft = (e)=>{
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  const handleRight = (e)=>{
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opaticy:0}}
    >
   <ProjectsContainer>

    <TitleContainer>
      <Title> My projects</Title>
      <Description>These are some of the projects that I have developed</Description>
    </TitleContainer>

    <ProjectsCarousel ref={carousel}>
<ProjectsCarousel2>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
  
        <Item >
          <ImageContainer>
            <Image src={img} alt='image'/>
          </ImageContainer>
        </Item>
</ProjectsCarousel2>
    
    </ProjectsCarousel>

    <ArrowContainer>
      <Arrow><ArrowLeft onClick={handleLeft} src={arrow}/></Arrow>
      <Arrow><ArrowRight onClick={handleRight} src={arrow}/></Arrow>

    </ArrowContainer>
   </ProjectsContainer>
   </motion.div>
  )
}

export default Projects