import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid 1px #222;
  background: rgb(255,255,255);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
`;

const StyledDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <StyledDiv className="App">
      <StyledButton>hello world</StyledButton>
    </StyledDiv>
  );
}

export default App;
