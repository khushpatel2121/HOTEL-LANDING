import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 100%;
width: 100%;
background-color:  #E5E5DB;
padding: 30px 10px;
display: flex;
justify-content:center;
align-items: center;
gap: 3.5rem;

`

const Card = styled.div`

`

const Title = styled.div`
padding:10px 10px 5px 10px;
font-family: "Roboto", sans-serif;
`

const Image = styled.img`
width: 170px;
height: 150px;
border-radius: 10px;

object-fit: cover;
-webkit-box-shadow: -3px -1px 25px -8px rgba(133,124,133,1);
-moz-box-shadow: -3px -1px 25px -8px rgba(133,124,133,1);
box-shadow: -3px -1px 25px -8px rgba(133,124,133,1);
`

const Number = styled.div`
padding:0px 0px 0px 9px;
font-family: "Roboto", sans-serif;
`



const PropertReverse = () => {
  return (
  <Container>
        <Card>
            <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Title>
              Hotel 
            </Title>
            <Number>
               43 porperties 
            </Number>
        </Card>
        <Card>
            <Image src="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg" />
            <Title>
              Resort
            </Title>
            <Number>
               43 porperties 
            </Number>
        </Card>
        <Card>
            <Image src="https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg" />
            <Title>
              Vills
            </Title>
            <Number>
               43 porperties 
            </Number>
        </Card>
        <Card>
            <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Title>
              Apartment 
            </Title>
            <Number>
               43 porperties 
            </Number>
        </Card>
        <Card>
            <Image src="https://www.familyhandyman.com/wp-content/uploads/2018/02/handcrafted-log-home.jpg" />
            <Title>
                Cabin
            </Title>
            <Number>
               43 porperties 
            </Number>
        </Card>
  </Container>
  )
}

export default PropertReverse
