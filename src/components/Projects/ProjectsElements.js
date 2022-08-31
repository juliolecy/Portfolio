import styled from 'styled-components';

export const ProjectsContainer=styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center ;
flex-direction: column;
background: #141414; 
overflow: hidden;
position: relative;
left:50%;
top:50%;
transform: translate(-50%, -20%);
z-index: 999;
border-radius: 40px;

` 

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center ;
flex-direction: column;
color: white;
text-align: center;
font-family:  'Montserrat', sans-serif;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-family:  'Montserrat', sans-serif;
    `

export const Description = styled.span` 
    font-size: 1.5rem;
    font-family:  'Montserrat', sans-serif;
    margin-bottom: 10px;
`

export const ProjectsCarousel=styled.div`
max-width: 75vw;
` 
export const ProjectsCarousel2 = styled.div`
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
`

export const Item =styled.div`
background-color: #fff;
margin: 10px;
padding: 10px;
width: 300px;
height: 300px;
flex: none;

` 
export const ImageContainer = styled.div``

export const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
` 


export const ArrowContainer = styled.div`
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center ;

`

export const Arrow = styled.button`
width: 100px;
background: transparent;
border: none;
&:hover{
    transform: scale(1.1);
}
`
export const ArrowRight = styled.img`
cursor: pointer;

`

export const ArrowLeft = styled.img`
cursor: pointer;
transform: rotate(180deg)
`