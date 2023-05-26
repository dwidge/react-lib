import React from "react";
import styled from "styled-components";
import { Vertical, Center } from "@dwidge/react-lib/Flex";
import { calcCSVArray } from "@dwidge/react-lib/utils/csv";

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>
        Hi.
        <pre>
          {calcCSVArray(
            [
              { id: "1", colA: "A1" },
              { id: "2", colA: "A2" },
            ],
            ","
          )}
        </pre>
      </Foreground>
    </Background>
  );
};

const Foreground = styled(Vertical)`
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
