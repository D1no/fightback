import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const DecoratedText = styled(Text)``;

const Title = props => {
  return (
    <DecoratedText
      mb={6}
      fontWeight="bold"
      fontSize={5}
      lineHeight={5}
      fontFamily="accent"
      {...props}
    >
      {props.children}
    </DecoratedText>
  );
};

export default Title;
