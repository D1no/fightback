import React from "react";
import { Box, Text } from "rebass";
import { storiesOf } from "@storybook/react";

import PersonCard from "./index";

storiesOf("PersonCard", module)
  .add("Simple", () => (
    <Box width="300px">
      <PersonCard
        name="Markus Fuhrmann"
        position="Co-Founder Delivery Hero, BITKRAFT"
        image="/media/holger-ewald.jpg"
      />
    </Box>
  ))
  .add("Double", () => (
    <Box width="600px">
      <PersonCard
        image="/media/holger-ewald.jpg"
        grid={[
          {
            name: "Dr. Jeanette von Ratibor",
            position: "SVP Deutsche Telekom",
          },
          {
            name: "Stephan Stroh",
            position: "CDO Deutsche Bahn",
          },
        ]}
        double
      />
    </Box>
  ))
  .add("With text", () => (
    <Box width="600px">
      <PersonCard
        image="/media/holger-ewald.jpg"
        grid={[
          {
            name: "Dr. Jeanette von Ratibor",
            position: "SVP Deutsche Telekom",
          },
          {
            name: "Stephan Stroh",
            position: "CDO Deutsche Bahn",
          },
        ]}
        double
      >
        <Text color="light">Text</Text>
      </PersonCard>
    </Box>
  ));
