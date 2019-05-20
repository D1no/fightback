import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const DecoratedText = styled(Text)``;

const NoteText = props => {
  return (
    <DecoratedText fontWeight="light" color="blue" fontSize={1} {...props}>
      {props.children}
    </DecoratedText>
  );
};

export default NoteText;
