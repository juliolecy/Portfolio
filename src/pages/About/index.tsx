import React, {useEffect} from 'react'
import * as k from './styles';
import profile from '../../assets/images/profile.png'
//FramerMotion
import {motion} from 'framer-motion'
//Aos
import useAOS from "../../effects/useAos.js";

const About = () => {

     useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])

  return (
    <motion.div
    initial={{width:0}}
   animate={{width:'100%'}}
   exit={{x: window.innerWidth, transition: {duration:0.4}}}
    >
    <k.Container>

        <k.Title
         data-aos="fade-down">
            About me
        </k.Title>

        <k.Glass data-aos="fade-up">

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