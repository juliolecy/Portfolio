import styled from 'styled-components'

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

export const AboutContainer= styled.div`
//linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const Glass = styled.div`
width: 90%;
height: 450px;
padding: 15px 15px;
backdrop-filter: blur(5px) ;
-webkit-backdrop-filter: blur(5px);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index:999;
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
top: 10px;

@media screen and (max-width: 650px){
            font-size: 2rem;
}

@media screen and (max-width: 406px){
            font-size: 1.7rem;

}
`
export const Content = styled.div`
gap: 30px;
display: grid;
grid-template-columns: 1fr 2fr;
margin-top: 30px;
height: 85%;

@media screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
            
}
`

export const ProfileContainer= styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const ProfileImage = styled.img`
width: 250px;
height: 250px;

@media screen and (max-width: 720px){
    display: none;
            
}

`
export const ApresentationContainer = styled.div`
height: 100%;
`

export const Apresentation = styled.span`

font-size: 1.9rem;

@media screen and (max-width: 1024px){
            font-size: 1.8rem;

}
@media screen and (max-width: 931px){
            font-size: 1.6rem;

}

@media screen and (max-width: 789px){
            font-size: 1.4rem;

}

@media screen and (max-width: 406px){
            font-size: 1.2rem;

}

@media screen and (max-width: 406px){
        

}


 

`
