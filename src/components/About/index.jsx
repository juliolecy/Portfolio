import React from 'react'
import {motion} from 'framer-motion'
import profile from '../../assets/images/profile.png'
import Video from '../../assets/videos/video3.mp4'
//import {TiSocialLinkedinCircular} from 'react-icons/ti'
//import {AiFillGithub} from 'react-icons/ai'
import {VideoContainer,
  VideoBg,
  AboutContainer,
    Glass,
    Title,
    ProfileContainer,
    ProfileImage,
    ApresentationContainer,
    Apresentation,
    Content
} from './AboutElements'


const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opaticy:0}}
    >
        <VideoContainer>
            <VideoBg autoPlay={true} loop muted src={Video} type='video/mp4'/>
         </VideoContainer>
    <AboutContainer>
        <Glass>
            <Title>About me</Title>
              <Content>
                <ProfileContainer>
                  <ProfileImage src={profile}/>
                </ProfileContainer>
                <ApresentationContainer>
                    <Apresentation>
                    My name is Julio Cesar, I'm from São Gonçalo, Rio de Janeiro.
                    <br/>
                     In 2019, when I was military in the Brazilian Air Force, in one of the classes I had my first contact with Java programming.  
                   
                     In 2022, after my decision to leave this profession, I restarted my studies, this time with Javascript.
                     <br />
                    Nowadays, I work with React, Node, Phyton and I focus on becoming a fullstack developer 
                    </Apresentation>
                </ApresentationContainer>
              </Content>
        </Glass>
    </AboutContainer>
    </motion.div>
  )
}

export default About;