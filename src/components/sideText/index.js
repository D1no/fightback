import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const DecoratedText = styled(Text)``;

const SideText = props => {
  return (
    <DecoratedText fontWeight="light" color="darkgray" {...props}>
      {props.children}
    </DecoratedText>
  );
};

export default SideText;
