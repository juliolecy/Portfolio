import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Nav, NavContainer, NavLogo, Hamburguer, NavMenu, NavLinks, NavItem} from './NavElements.js'
import {FaBars, FaTimes} from 'react-icons/fa'

type Props = {
    toggle?:any;
    scrolled:boolean;
}

const  Navbar = ({toggle, scrolled}:Props) => {



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
              <NavItem>
                <NavLinks to='/skills'>Skills</NavLinks>
              </NavItem>
            </NavMenu>
        </NavContainer>
    </Nav>
    </>
  )
}

export default Navbar;

