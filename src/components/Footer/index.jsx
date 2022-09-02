import React from 'react'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'
import {FooterContainer, FooterLogo, FooterSpan, FooterSM, SMLink} from './FooterElements.js'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo>JLINS</FooterLogo>
        <FooterSpan>JLins © 2022 All rights reserved. </FooterSpan>
        <FooterSM>
            <SMLink href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={50} style={{color: '#fff'}} /></SMLink> 
            <SMLink href='https://github.com/juliolecy'><AiFillGithub size={40} style={{color: '#fff'}} /></SMLink>
            <SMLink href='https://t.me/JLins19'><TbBrandTelegram size={40} style={{color: '#fff'}} /></SMLink>
            <SMLink href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem'><BsWhatsapp size={35} style={{color: '#fff'}} /></SMLink>
        </FooterSM>
    </FooterContainer>
  )
}

export default Footer;