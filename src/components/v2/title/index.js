import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

import MarkdownText from "../markdownText";

const StyledDecoratedTitle = styled(Text)`
  p {
    margin-block-end: 0;
  }
`;

const Title = props => {
  const childrenAsString = typeof props.children === "string";

  return (
    <StyledDecoratedTitle
      fontSize={["40px", 9]}
      lineHeight={0}
      fontWeight={"bold"}
      color={"accent"}
      {...props}
    >
      {childrenAsString ? (
        <MarkdownText source={props.children} />
      ) : (
        props.children
      )}
    </StyledDecoratedTitle>
  );
};

export default Title;
