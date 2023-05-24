import React from "react";
import styled from "styled-components";
import { Fill, Center } from "../lib/Flex";

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>Hi.</Foreground>
    </Background>
  );
};

const Foreground = styled(Fill)`
  background-color: cyan;
  min-height: 200px;
  min-width: 200px;
  max-width: 500px;
  padding: 1em;
`;

const Background = styled(Center)`
  background-color: navy;
`;

export default App;
