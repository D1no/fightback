import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

import Logo from "components/v2/logo";

const DecoratedHeader = styled(Box)`
  padding-bottom: 20vh;
`;

const Header = props => {
  return (
    <DecoratedHeader pt={7} {...props}>
      <Logo width={[110, 172]} />
      {props.children}
    </DecoratedHeader>
  );
};

export default Header;
