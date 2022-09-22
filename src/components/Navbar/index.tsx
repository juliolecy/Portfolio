import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavContainer, NavLogo, Hamburguer, NavMenu, NavLinks, NavItem } from './NavElements.js'
import { FaBars, FaTimes } from 'react-icons/fa'
//Aos
import useAOS from "../../effects/useAos.js";

type Props = {
    toggle?: any;
    scrolled: boolean;
}

const Navbar = ({ toggle, scrolled }: Props) => {

    useEffect(() => {
        useAOS({ duration: 2000 })
    }, [])


    return (
        <>
            <Nav scrolled={scrolled}>
                <NavContainer>
                    <NavLogo to='/'>JLINS</NavLogo>
                    <Hamburguer onClick={toggle}>
                        <FaBars />
                    </Hamburguer>

                    <NavMenu>
                        <NavItem data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="300">
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>

                        <NavItem data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="400">
                            <NavLinks to='/projects'>Projects</NavLinks>
                        </NavItem>

                        <NavItem data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">
                            <NavLinks to='/about'>About Me</NavLinks>
                        </NavItem>

                        <NavItem data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="600">
                            <NavLinks to='/contact'>Contact</NavLinks>
                        </NavItem>

                        <NavItem data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="700">
                            <NavLinks to='/skills'>Skills</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;

