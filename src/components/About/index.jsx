import React from 'react'
import {motion} from 'framer-motion'
import profile from '../../assets/images/node.png'
//import {TiSocialLinkedinCircular} from 'react-icons/ti'
//import {AiFillGithub} from 'react-icons/ai'
import {AboutContainer,
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
    <AboutContainer>
        <Glass>
            <Title>About me</Title>
              <Content>
                <ProfileContainer>
                  <ProfileImage src={profile}/>
                </ProfileContainer>
                <ApresentationContainer>
                    <Apresentation>
                      My name ins Julio Cesar as sair before. In 2021...
                    </Apresentation>
                </ApresentationContainer>
              </Content>
        </Glass>
    </AboutContainer>
    </motion.div>
  )
}

export default About;