import styled from 'styled-components';
import img from '../../assets/images/img1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";



export const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center ;
flex-direction: column;
overflow: hidden;
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

@media screen and (max-width:600px){
      font-size: 2rem;
    }

    @media screen and (max-width:360px){
      font-size: 1.7rem;
    }
`
export const Glass = styled.div`
width: 90%;
height: 500px;
padding: 10px ;
backdrop-filter: blur(3px) ;
-webkit-backdrop-filter: blur(5px);
font-family:  'Montserrat', sans-serif;
color: #fff;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
position:relative;
`
export const SwiperContainer = styled(Swiper)`
position:relative;
`

export const SwiperSlides = styled(SwiperSlide)`
`


export const ProjectContainer=styled.div`
width: 90%;

height:400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-bottom: 80px;
gap: 2rem;


    @media screen and (max-width:653px){
        margin-bottom:10px;
        flex-direction: column;
}
`

export const ProjectsContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

a{
    text-decoration: none;
    padding: 20px;

    svg{
        font-size: 3rem;
        color: #fff;

        &:hover{
            color: #00FFFF;
        }
    }
}
`

export const ProjectTitle=styled.h1`
word-break: normal;
font-size: 2rem;
color: #fff;
margin-bottom: 20px;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width:605px){
    font-size: 1.2rem;
}
`
export const Links = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const Image = styled.img`

width: 300px;
height: 300px;

@media screen and (max-width:831px){
    width: 250px;
height: 250px;

}

@media screen and (max-width:737px){
    width: 200px;
height: 200px;

}
`


