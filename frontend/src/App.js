import styled from "styled-components";
import bg from "./img/bg.png";
import {MainLayout} from './styles/Layouts.js'
import Orb from './components/orb/Orb.js'

function App() {
  
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Orb/>
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
