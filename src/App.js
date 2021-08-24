import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import About from "./componente/About";

const Title = styled.h1`
  margin-top:4%;
  font-size: 40px;
  color:#98F5FF;
  margin-top:%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#68838B;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Olá</Title>
        <About 
        Nome="Meu nome é Gabriel" 
        Idade= "Tenho 19"
        Materia="Eu quero estudar Historia"/>
      </Container>
    );
  }
}

export default App;
