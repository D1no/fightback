import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const DecoratedText = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.light};
  strong {
    font-weight: ${props => props.theme.fontWeights.regular};
  }
`;

const SideText = props => {
  return (
    <DecoratedText color="darkgray" {...props}>
      {props.children}
    </DecoratedText>
  );
};

export default SideText;
