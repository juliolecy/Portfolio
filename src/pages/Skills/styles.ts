import styled from 'styled-components'

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
font-size: 4rem;
text-shadow: 1px 1px 1px #919191,
1px 2px 1px #919191,
1px 3px 1px #919191,
1px 4px 1px #919191,
1px 5px 1px #919191,
1px 6px 1px #919191,
1px 7px 1px #919191;
margin-bottom: 20px;

@media screen and (max-width: 600px){
            font-size: 2rem;
}

@media screen and (max-width: 360px){
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
`

export const SkillContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 80px;

@media screen and (max-width:668px){
    margin-bottom:60px;
}




`

export const SkillTitle = styled.h1`
word-break: normal;
font-size: 1.5rem;
color: #fff;
margin-bottom: 20px;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width:605px){
    font-size: 1.2rem;
}
`

export const Image = styled.img`

width: 80px;
height: 80px;
`


