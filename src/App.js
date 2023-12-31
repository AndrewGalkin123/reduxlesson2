import React from "react";
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding: 2rem;
background: black;
color: green;
`

function App() {
  return (
    <AppWrapper className="App">
      <Flex justify="center">
        <Title>Console cmd 2023</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button color="green"  align="flex-end">Отправить</Button>
      </Flex>

    </AppWrapper>
  );
}

export default App;
