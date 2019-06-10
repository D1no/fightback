import styled from "styled-components";
import { Box } from "rebass";
import React from "react";

const Padded = props => (
  <Box
    mx={"auto"}
    // Base Padding to Content
    px={[5, 7]}
    {...props}
  />
);

const Wrapper = styled(Padded)`
  max-width: ${props => props.theme.maxWidth};
  box-sizing: content-box;
`;

export default Wrapper;
