import React from 'react'
import styled from "styled-components"
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import RoomServiceIcon from '@mui/icons-material/RoomService';

const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;

color: white;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:start;
padding: 40px 10px;
align-items: center;
gap: 20px 20px;
flex-wrap: wrap;
position: absolute;
top: 0;
height: 100%;
`

const Card = styled.div`
display: flex;
gap: 100px;
align-self: center;
justify-self: center;
margin-top: 50px;
`

const Img = styled.img`
width: 100%;
height: 50vh;
object-fit: cover;
filter: brightness(50%);
`

const LTitle = styled.div`
font-size: 40px;
font-weight: 300;
font-family: "Cinzel", serif;
`

const Con = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 70px;
`

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
font-size: 20px;
`

const Title = styled.div``


const Services = () => {
  return (
   <>
    <Container>

        <Img src='https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <Wrapper>
        <LTitle>
            Services
        </LTitle>
            <Card>
            <Item>

                <Con>
                    <LocalTaxiIcon fontSize='inherit'/>
                </Con>
                <Title>
                    Airport Transfer
                </Title>
            </Item>
            <Item>
                <Con>
                    <RestaurantIcon fontSize='inherit'/>
                </Con>
                <Title>
                    Resturants
                </Title>
            </Item>
            <Item>
                <Con>
                    <SpaIcon fontSize='inherit'/>
                </Con>
                <Title>
                    Spa and Wellness
                </Title>
            </Item>
            <Item>
                <Con>
                    <RoomServiceIcon fontSize='inherit'/>
                </Con>
                <Title>
                    Room Services
                </Title>
            </Item>
             </Card>
             </Wrapper>
    </Container>
   </>
  )
}

export default Services
