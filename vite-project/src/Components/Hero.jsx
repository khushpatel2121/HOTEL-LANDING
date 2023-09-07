import React ,{useState}from "react";
import styled from "styled-components";
import Hotel from "../assets/Video1.mp4";


 const HeroContainer = styled.div`
background: rgba(0,0,0,0.1);
display: flex;
justify-content: center;
align-items: center;
padding:0 30px;
height:100vh;
position:relative;
z-index: -1;

 :before{
    content:'' ;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%,  rgba(0,0,0,0.1) 90%),linear-gradient( 180deg,rgba(0,0,0,0.001) 0% ,transparent 100%);
    z-index: -1;
    
} 

`
const HeroBg =styled.div`
position:absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

 const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
const HeroContent = styled.div`
z-index: 2;

position: absolute;
padding: 8px 24px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: transparent;
height: 100vh;
width:100%;
`
const HeroH1 = styled.h1`
color: white;
margin-top: 200px;
font-size: 48px;
text-align: center;
line-height: 1.1;
width: 60%;
font-family: 'Cinzel', serif;


@media screen and (max-width:768px){
    font-size: 40px;
}
@media screen and (max-width:480px){
    font-size: 32px;
}    

`
const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width:768px){
    font-size: 24px;
}
@media screen and (max-width:480px){
    font-size: 18px;
}    
`

const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
const Hero2 = styled.div`
display: flex;
padding: 50px;
align-items: center;
justify-content: center;
gap: 150px;
margin-top: 70px;
color: white;
`
const Set = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`
const Iconz = styled.div`
display: flex;
align-items: center;
justify-content: center;

font-size: 50px;
color: #A78C59;
`
const Title2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 350;
`




function HeroSection() {

  const [hover,setHover] = useState();

  const onHover =()=> {
    setHover(!hover);
  }
  
  return (
  <HeroContainer>
    <HeroBg>
      <VideoBg autoPlay loop muted src={Hotel} type='video/mp4'/>
    </HeroBg>
    <HeroContent>
      <HeroH1>
        Find your dream destination and book your Happy stay now.
      </HeroH1>
      <HeroP>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </HeroP>
      <Hero2>
        <Set>
           <Iconz>
             10+
           </Iconz>
           <Title2>
               Cities
           </Title2>
        </Set>
        <Set>
           <Iconz>
             5 lakh+
           </Iconz>
           <Title2>
                Happy Guests
           </Title2>
        </Set>
        <Set>
           <Iconz>
             40+
           </Iconz>
           <Title2>
               Properties
           </Title2>
        </Set>
      </Hero2>
    </HeroContent>
  </HeroContainer>
  )
}

export default HeroSection
