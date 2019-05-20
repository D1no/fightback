import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const DecoratedMarkdown = styled(ReactMarkdown)`
  p {
    margin-block-start: 0em;
    margin-block-end: 1.5em;
  }

  a {
    color: ${props => props.theme.colors.blue};
  }
`;

const MarkdownText = props => {
  return <DecoratedMarkdown source={props.source} />;
};

export default MarkdownText;
