import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const DecoratedPage = styled(Box)`
  position: relative;
  min-height: 100vh;
`;

const Page = props => {
  return <DecoratedPage {...props}>{props.children}</DecoratedPage>;
};

export default Page;
