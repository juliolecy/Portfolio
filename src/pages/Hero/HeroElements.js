import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 3px;
height: 800px;
position: relative;
z-index: 1;
overflow: hidden;
`

export const HeroBg = styled.div`
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

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  top:40%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

 
`

export const HeroSpan = styled.span`
font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 2rem;

    @media screen and (max-width: 680px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`

export const StrokeText = styled.span`
  color: transparent;
  font-family:  'Montserrat', sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:white;
`

export const HeroGlitch = styled.h1`
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 2.5rem;
    transform: scale(2);
    padding: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;

    &:after{
      padding: 30px;
      color: white;
      content: attr(data-text);
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      background: rgba(0, 0, 0, 0);
      overflow: hidden;
      top: 0;
        left: -3px;
      text-shadow: -2px 0 rgb(0, 0, 0);
      animation: glitch-2 2s linear infinite reverse;
    }

    &:before{
      padding: 30px;
  color: white;
  content: attr(data-text);
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  top: 0;
  left: 3px;
  text-shadow: -2px 0 rgb(0, 0, 0);
  animation: glitch-1 2s linear infinite reverse;
    }

    @keyframes glitch-1 {
    0% {
      clip: rect(132px, auto, 101px, 30px);
    }
    5% {
      clip: rect(17px, auto, 94px, 30px);
    }
    10% {
      clip: rect(40px, auto, 66px, 30px);
    }
    15% {
      clip: rect(87px, auto, 82px, 30px);
    }
    20% {
      clip: rect(137px, auto, 61px, 30px);
    }
    25% {
      clip: rect(34px, auto, 14px, 30px);
    }
    30% {
      clip: rect(133px, auto, 74px, 30px);
    }
    35% {
      clip: rect(76px, auto, 107px, 30px);
    }
    40% {
      clip: rect(59px, auto, 130px, 30px);
    }
    45% {
      clip: rect(29px, auto, 84px, 30px);
    }
    50% {
      clip: rect(22px, auto, 67px, 30px);
    }
    55% {
      clip: rect(67px, auto, 62px, 30px);
    }
    60% {
      clip: rect(10px, auto, 105px, 30px);
    }
    65% {
      clip: rect(78px, auto, 115px, 30px);
    }
    70% {
      clip: rect(105px, auto, 13px, 30px);
    }
    75% {
      clip: rect(15px, auto, 75px, 30px);
    }
    80% {
      clip: rect(66px, auto, 39px, 30px);
    }
    85% {
      clip: rect(133px, auto, 73px, 30px);
    }
    90% {
      clip: rect(36px, auto, 128px, 30px);
    }
    95% {
      clip: rect(68px, auto, 103px, 30px);
    }
    100% {
      clip: rect(14px, auto, 100px, 30px);
    }
  };
  @keyframes glitch-2 {
    0% {
      clip: rect(129px, auto, 36px, 30px);
    }
    5% {
      clip: rect(36px, auto, 4px, 30px);
    }
    10% {
      clip: rect(85px, auto, 66px, 30px);
    }
    15% {
      clip: rect(91px, auto, 91px, 30px);
    }
    20% {
      clip: rect(148px, auto, 138px, 30px);
    }
    25% {
      clip: rect(38px, auto, 122px, 30px);
    }
    30% {
      clip: rect(69px, auto, 54px, 30px);
    }
    35% {
      clip: rect(98px, auto, 71px, 30px);
    }
    40% {
      clip: rect(146px, auto, 34px, 30px);
    }
    45% {
      clip: rect(134px, auto, 43px, 30px);
    }
    50% {
      clip: rect(102px, auto, 80px, 30px);
    }
    55% {
      clip: rect(119px, auto, 44px, 30px);
    }
    60% {
      clip: rect(106px, auto, 99px, 30px);
    }
    65% {
      clip: rect(141px, auto, 74px, 30px);
    }
    70% {
      clip: rect(20px, auto, 78px, 30px);
    }
    75% {
      clip: rect(133px, auto, 79px, 30px);
    }
    80% {
      clip: rect(78px, auto, 52px, 30px);
    }
    85% {
      clip: rect(35px, auto, 39px, 30px);
    }
    90% {
      clip: rect(67px, auto, 70px, 30px);
    }
    95% {
      clip: rect(71px, auto, 103px, 30px);
    }
    100% {
      clip: rect(83px, auto, 40px, 30px);
    }
  };

     @media screen and (max-width: 680px){
    font-size: 2rem;
  }

  @media screen and (max-width: 500px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 366px){
    font-size: 1.2rem;
  }
`

export const BtnContainer = styled.div`

position: absolute;
top:60%;
left: 50%;
transform: translate(-50%, -50%);

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

export const HeroBtn = styled.button`
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
`

export const SMContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 35%;
  right: 5%;
   @media screen and (max-width: 966px){
    display: none
  }
`

export const SMLink = styled.a``