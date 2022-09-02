import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Nav, NavContainer, NavLogo, Hamburguer, NavMenu, NavLinks, NavItem} from './NavElements.js'
import {FaBars, FaTimes} from 'react-icons/fa'

const  Navbar = ({toggle, scrolled}) => {



  return (
    <>
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLogo to='/'>JLINS</NavLogo>
            <Hamburguer onClick={toggle}>
                <FaBars/> 
            </Hamburguer>

            <NavMenu>
            <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/projects'>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about'>About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>Contact</NavLinks>
              </NavItem>
            </NavMenu>
        </NavContainer>
    </Nav>
    </>
  )
}

export default Navbar;
        
