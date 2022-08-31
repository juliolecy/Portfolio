import styled from 'styled-components'
import img from '../../assets/images/img1.jpg'
import profileimg from '../../assets/images/node.png'

export const AboutContainer= styled.div`
//linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
 background: url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const Glass = styled.div`
width: 90%;
height: 400px;
padding: 15px 35px;
backdrop-filter: blur(5px) ;
-webkit-backdrop-filter: blur(5px);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -110%);
z-index:9999;
font-family:  'Montserrat', sans-serif;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`
export const Title = styled.h1`
font-size: 2.5rem;
position: fixed;
top: 0;
`
export const Content = styled.div`
gap: 30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const ProfileContainer= styled.div`

`
export const ProfileImage = styled.img`
width: 40px;
height: 40px;

`
export const ApresentationContainer = styled.div``

export const Apresentation = styled.div`
`
