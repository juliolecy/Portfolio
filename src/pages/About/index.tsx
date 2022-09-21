import React from 'react'
import {motion} from 'framer-motion'
import profile from '../../assets/images/profile.png'
//import {TiSocialLinkedinCircular} from 'react-icons/ti'
//import {AiFillGithub} from 'react-icons/ai'
import * as k from './styles';

const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <k.Container>

        <k.Title
         data-aos="fade-up">
            About me
        </k.Title>

        <k.Glass>

                <k.ProfileContainer>
                  <k.ProfileImage src={profile}/>
                </k.ProfileContainer>

                <k.ApresentationContainer>
                    <k.Apresentation>
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                    My name is Julio Cesar, I'm from São Gonçalo, Rio de Janeiro.
                    <br/>
                     In 2019, when I was military in the Brazilian Air Force, in one of the classes I had my first contact with Java programming.

                     In 2022, after my decision to leave this profession, I restarted my studies, this time with Javascript.
                     <br />
                    Nowadays, I work with React, Node, Phyton and I focus on becoming a fullstack developer
                    </k.Apresentation>
                </k.ApresentationContainer>

        </k.Glass>

    </k.Container>
    </motion.div>
  )
}

export default About;