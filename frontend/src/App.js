import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/navigation.js";
import Orb from './components/orb/Orb.js';
import bg from "./img/bg.png";
import { MainLayout } from './styles/Layouts.js';

function App() {

  const [active, setActive] = useState(1)
  
  return (
    <AppStyled bg={bg} className="App">
      <Orb/>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
  `;

export default App;
