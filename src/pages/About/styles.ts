import styled from 'styled-components'


export const Container= styled.div`
//linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
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

position: absolute;
top: 15%;
left: 50%;
transform: translate(-50%, -50%);



@media screen and (max-width: 650px){
            font-size: 3rem;
            margin-bottom:30px;
}

@media screen and (max-width: 406px){
            font-size: 2rem;

}`

export const Glass = styled.div`
width: 90%;
height: max-content;
padding: 15px 15px;
backdrop-filter: blur(5px) ;
-webkit-backdrop-filter: blur(3px);
position: absolute;
top: 60%;
left: 50%;
transform: translate(-50%, -50%);
z-index:999;
font-family:  'Montserrat', sans-serif;
color: white;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
padding:20px;

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
