import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #141414;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`

export const FooterLogo = styled.h1`
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
}

  @media screen and (max-width:768px){
    display:none;
    }
`
export const FooterSpan = styled.span`
color:#fff;
font-size: 1.4rem;
font-family: 'Playfair Display', serif;
  @media screen and (max-width:768px){
    margin-bottom:15px;
    }
`
export const FooterSM = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const SMLink = styled.a`
padding: 0 10px;

svg{
    color: #fff;
    font-size: 32px;

    &:hover{
        color: #00FFFF;
    }
}
`