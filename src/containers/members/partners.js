import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const StyledPartners = styled(Box)`
  background-color: ${props => props.theme.backgroundColor};
  img {
    display: block;
    width: 100%;
  }
`;

const Partners = props => {
  return (
    <StyledPartners {...props}>
      <img src={"/images/partners.jpg"} alt="List of partners" />
    </StyledPartners>
  );
};

export default Partners;
