import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "rebass";

import Parallax from "./index";

storiesOf("Parallax", module).add("Simple", () => (
  <Box style={{ height: 1000, padding: 50 }}>
    <Parallax
      bgImage="/media/parallax1.jpg"
      pb={400}
      bgImageStyle={{ width: "100%", height: "auto" }}
    />
  </Box>
));
