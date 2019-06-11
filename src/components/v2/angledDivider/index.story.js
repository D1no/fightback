import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Box } from "rebass";

import AngledDivider from "./index";

const StyledBox = styled(Box)`
  background-color: #f0f0f0;
`;

storiesOf("V2/AngledDivider", module)
  .add("Simple", () => (
    <Box>
      <AngledDivider />
      <StyledBox>Hero</StyledBox>
      <AngledDivider flip />
    </Box>
  ))
  .add("Mirrored", () => (
    <Box>
      <AngledDivider mirror />
      <StyledBox>Hero</StyledBox>
      <AngledDivider mirror flip />
    </Box>
  ));
