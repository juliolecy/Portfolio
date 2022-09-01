import styled from 'styled-components'
import img from '../../assets/images/img2.jpg'

export const VideoContainer = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const ContactContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white; 
width: 100%;
height: 100vh;
position: relative;


`

export const Glass = styled.div`
width: 90%;
height: 500px;
padding: 15px 15px;
backdrop-filter: blur(5px) ;
-webkit-backdrop-filter: blur(5px);
font-family:  'Montserrat', sans-serif;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Text = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-bottom: 30px;

`
export const TextOne = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
`
export const TextTwo = styled.span`
font-size: 1.5rem;
`
export const ContactContainer2 = styled.div`
max-width: 100%;
width: 100%;
height: 80%;
display: grid;
grid-template-columns: 1fr 2fr;
justify-content: center;
gap: 12%;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
 
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
background: #3B0F81;
transition: .5s;
border: 1px solid white;

    &:hover{
        background: transparent;
        cursor: pointer;
    }
`
export const Title = styled.h2`
font-size: 1.3rem;
`
export const Name = styled.span`
font-size: 1rem;
font-weight: bolder;
margin-bottom: 10px;

 @media screen and (max-width: 1999px){
        font-size: .9rem;
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
padding: 1.5rem;
border-radius: 15px;
background: transparent;
border: 2px solid white;
resize: none;
color:white;
`
export const Textarea= styled.textarea`
width: 100%;
padding: 1.5rem;
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