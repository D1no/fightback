import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";

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
  return (
    <DecoratedMarkdown
      escapeHtml={false}
      source={props.source}
      plugins={[breaks]}
    />
  );
};

export default MarkdownText;
