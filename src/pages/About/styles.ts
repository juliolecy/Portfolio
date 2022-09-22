import styled from 'styled-components'


export const Container= styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;

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

`

export const Glass = styled.div`
width: 90%;
height: max-content;
padding: 15px 15px;
position: relative;
backdrop-filter: blur(5px) ;
-webkit-backdrop-filter: blur(3px);
font-family:  'Montserrat', sans-serif;
color: white;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;

@media screen and (max-width:728px){
    flex-direction: column;
    padding:5px;
    justify-content: space-evenly;

}

`

export const ProfileContainer= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 30%;
margin-right: 10px;
@media screen and (max-width:728px){
margin-right: 10px;
height: 150px;
width: 150px;
}
`
export const ProfileImage = styled.img`
width: 100%;
height: 100%;

@media screen and (max-width: 720px){

}

`
export const ApresentationContainer = styled.div`
height: 100%;
text-align: center;
width: 70%;
display: flex;
align-items: center;
justify-content: center;
margin-left:10px;
padding:10px;

@media screen and (max-width:728px){
    height: 50%;
    overflow-y: scroll;
    width: 90%;
    height: 150px;
    margin-left:0;

}

`

export const Apresentation = styled.span`
text-align: center;
font-size: 1.7rem;

@media screen and (max-width: 1024px){
            font-size: 1.7rem;

}
@media screen and (max-width: 931px){
            font-size: 1.6rem;

}

@media screen and (max-width: 789px){
            font-size: 1.4rem;

}
@media screen and (max-width: 728px){
height: 100%;

}

@media screen and (max-width: 436px){
        font-size: 1.3rem;

}




`
