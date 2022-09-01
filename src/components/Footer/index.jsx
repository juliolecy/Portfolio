import React from 'react'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {FooterContainer, FooterLogo, FooterSpan, FooterSM, SMLink} from './FooterElements.js'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo>JLINS</FooterLogo>
        <FooterSpan>JLins © 2022 All rights reserved. </FooterSpan>
        <FooterSM>
            <SMLink href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={50} style={{color: '#fff'}} /></SMLink> 
            <SMLink href='https://github.com/juliolecy'><AiFillGithub size={40} style={{color: '#fff'}} /></SMLink>
        </FooterSM>
    </FooterContainer>
  )
}

export default Footer;