import styled from 'styled-components'
import img from '../../assets/images/img2.jpg'

export const Container = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #fff;
`

export const Title = styled.h1`
font-family: 'Montserrat', sans-serif;
font-weight: normal;
color: #fff;
font-size: 3rem;
text-shadow: 1px 1px 1px #919191,
1px 2px 1px #919191,
1px 3px 1px #919191,
1px 4px 1px #919191,
1px 5px 1px #919191,
1px 6px 1px #919191,
1px 7px 1px #919191;
margin-bottom: 20px;

@media screen and (max-width:600px){
      font-size: 2rem;
    }

    @media screen and (max-width:360px){
      font-size: 1.7rem;
    }
`

export const Glass = styled.div`
width: 90%;
height: max-content;
padding: 15px;
backdrop-filter: blur(3px) ;
-webkit-backdrop-filter: blur(5px);
font-family:  'Montserrat', sans-serif;
color: #fff;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 1.2rem;
`

export const ContactOptions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.2rem;
justify-content: center;

@media screen and (max-width: 768px){
        display: none;
    }
`

export const To = styled.a`
font-size: 1rem;
display: inline-block;
margin-top: 10px;
text-decoration: none;
outline: none;
color: white;
`

export const ContactOption = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Montserrat', sans-serif;
border-radius: 12px;
border: none;
padding: 15px;
color: white;
background: transparent;
transition: .5s;
border: 1px solid white;
position:relative;

    &:hover{

        ${To} svg{
            color: #00FFFF;
        }

    cursor: pointer;
    }

    &:before{
    border-radius: 12px;
    transition: .5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #ffffff;
    }

    &:hover:before{
    transition: all ease .5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
    }
`




export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1.2rem;

@media screen and (max-width: 500px){
       width: 100%;
    }
`
export const Input = styled.input`
width: 100%;
padding: 1rem;
border-radius: 15px;
background: transparent;
border: 2px solid white;
resize: none;
color:white;
`
export const Textarea= styled.textarea`
width: 100%;
padding: 1rem;
border-radius: 15px;
background: transparent;
border: 2px solid white;
resize: none;
color:white;
`
export const Button = styled.button`
cursor: pointer;
width: 150px;
height: 50px;
border: none;
color: #fff;
transition: ease-out .3s;
font-size: 1.2rem;
outline: none;
border: 3px solid #ffffff;
position: relative;
z-index: 1;
background: transparent;

    &:hover{
    cursor: pointer;
    color: black;
    }

    &:before{
        color: black;
    transition: .5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #ffffff;
    }

    &:hover:before{
        transition: all ease .5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
    }
`