import React from "react";
import styled from "styled-components";
import PropertReverse from "./PropertReverse";

const Container = styled.div`
background-color:#E5E5DB;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
user-select: none;
`;

const Top = styled.div``;

const Bottom = styled.div``;

const H1 = styled.div`
width: 80%;
margin-left: 5%;
font-size: 20px;
font-weight: 900;
font-family: "Cinzel", serif;
color: #A78C59;
`;
const Properties = () => {
  return (
    <>
      <Container>
        <H1>Browse by property type</H1>
        <PropertReverse />
      </Container>
    </>
  );
};

export default Properties;
