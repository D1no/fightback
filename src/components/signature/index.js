import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import { height, width } from "styled-system";

const StyledSignature = styled(Box)`
  width: 246px;
  height: 96px;
  ${width}
  ${height}
  background-size: cover;
  background-image: url("/images/signature.png");
`;

const Signature = props => {
  return <StyledSignature {...props} />;
};

export default Signature;
