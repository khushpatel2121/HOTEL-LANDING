import React from 'react'
import Slider from './Slider'
import styled from "styled-components"

const Container = styled.div`
height: 100%;
width: 100%;
background-color:  #E5E5DB;
padding: 50px 10px;
gap: 40px 10px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;

`



const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 80%;
align-self: center;
color: #A78C59;
font-size: 30px;
`

const Bottom = styled.div`
`

const H1 = styled.h1`
font-family: 'Cinzel', serif;
font-size: 50px;
font-weight: 100;
`



const TopPropertie = () => {
  return (
   <Container>
        <Wrapper>
        <Top>
            <H1>TOP PROPERTIES</H1>
        </Top>
        <Bottom>
            <Slider/>
        </Bottom>
        </Wrapper>
    </Container>
  )
}

export default TopPropertie
