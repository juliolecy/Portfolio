import styled from 'styled-components'
import img from '../../assets/images/img2.jpg'

export const ContactContainer = styled.div`
background: url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white; 
width: 100%;
height: 100vh;
`

export const Glass = styled.div`
width: 90%;
height: 400px;
padding: 15px 35px;
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
max-width: 600px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 12%;

    @media screen and (max-width: 1024px){
        grid-template-columns: fr;
        gap:2rem;
    }

     @media screen and (max-width: 600px){

    }   
`

export const ContactOptions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.2rem;
justify-content: center;
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
width: 450px;
display: flex;
flex-direction: column;
gap: 1.2rem;
`
export const Input = styled.input`
width: 450px;
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
export const Button = styled.button``