import styled from 'styled-components';
import img from '../../assets/images/img1.jpg'

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

export const ProjectsContainer=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center ;
flex-direction: column;
overflow: hidden;
position: relative;
z-index: 999;
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

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center ;
flex-direction: column;
color: white;
text-align: center;
font-family:  'Montserrat', sans-serif;
margin-top: 100px;
background-color: transparent;
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
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
` 
export const ProjectsCarousel2 = styled.div`
display: flex;
overflow-x: auto;
scroll-behavior: smooth;

&::-webkit-scrollbar{
    display: none;
}
`
export const ImageContainer = styled.div`

transition: .5s;
`


export const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
` 
export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity: 0;
transition: .5s;
`
export const ProjectTitle = styled.h1`
font-size: 1.5rem;
font-family:  'Montserrat', sans-serif;
color: #fff;
margin-bottom: 15px;
`
export const Links = styled.a`
    cursor: pointer;
    margin-bottom: 10px;

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
transform: rotate(180deg);
`
export const Item =styled.div`
position: relative;
background-color: black;
margin: 10px;
padding: 0;
width: 300px;
height: 300px;
flex: none;
overflow: hidden;
transition: .5s;

&:hover ${Content}{
        opacity: 1;
    }

    &:hover ${ImageContainer}{
        opacity: 0;
    }
` 