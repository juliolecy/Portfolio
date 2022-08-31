import React, {useState} from 'react'
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
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills'>Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects'>Projects</NavLinks>
              </NavItem>
            </NavMenu>
        </NavContainer>
    </Nav>
    </>
  )
}

export default Navbar;
        
