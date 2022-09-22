import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'

interface Props{
    scrolled:boolean;
}

export const Nav = styled.header<Props>`
    background: ${({scrolled}) => (scrolled? '#141414' : 'transparent')};
    margin-top: -80px ;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 999999;
    transition: .8s all ease;

    @media screen and (max-width: 960px){
        transition: .8s all ease;
    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    width: 80px;
    margin-left: 24px;
    color: white;
    position: relative;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 4px;

    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    font-family: 'Lobster', cursive;
    text-decoration: none;
    animation: animate 6s linear infinite;

      @keyframes animate{
    0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
}`

export const Hamburguer = styled.div`
display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;

        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style    : none;
    text-align: center;
    margin-right: -22px;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        display: none;

    }
`

export const NavItem = styled.li`
height: 80px;
padding: 0 20px;

`
export const NavLinks = styled(LinkRouter)`
 font-family: 'Montserrat', sans-serif;
    color: #fff;
    display: flex;
    font-size:1.2rem;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &:hover{
        color: #00FFFF;
    }

    &.active{
        border-bottom: 3px solid red;
    }

    &:after{
        content: "";
        position: absolute;
        background-color: #00FFFF;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 15px;
        transition: .5s;
    }

    &:hover:after{
            width: 100%;
    }



`


