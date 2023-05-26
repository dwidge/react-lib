import React from "react";
import styled from "styled-components";
import { Vertical, Center } from "@dwidge/react-lib/Flex";
import { calcCSVArray } from "@dwidge/react-lib/utils/csv";
import { Text } from "../lib/Text";
import { Grid } from "../lib/Grid";

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>
        <Grid>
          Hi.
          <TextBg>
            {calcCSVArray(
              [
                { id: "1", colA: "A1" },
                { id: "2", colA: "A2" },
              ],
              ","
            )}
          </TextBg>
          <TextBg>
            Hail-shot bounty to go on account swab clap of thunder chandler
            squiffy hogshead Davy Jones' Locker quarter. Salmagundi bowsprit
            clipper Admiral of the Black yard port bilge hardtack Shiver me
            timbers Blimey.
          </TextBg>
          <TextBg>
            Admiral of the Black wherry fire ship lookout topgallant jolly boat
            crow's nest overhaul coxswain galleon. Gold Road mizzen weigh anchor
            scourge of the seven seas shrouds reef sails stern loot salmagundi
            bucko.
          </TextBg>
          <TextBg>
            {`Pillage galleon barkadeer aye

            boatswain Jack Ketch belaying pin
            
            grapple bowsprit fathom. Fire ship
            overhaul gangplank yawl long boat
            
            Cat o'nine tails holystone skysail
            splice the main brace lugsail.`}
          </TextBg>
        </Grid>
      </Foreground>
    </Background>
  );
};

const TextBg = styled(Text)`
  background-color: silver;
`;

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
