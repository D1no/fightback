import React from "react";
import styled from "styled-components/macro";
import { Box } from "rebass";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./fightback-logo.svg";

const StyledFightbackLogo = styled(Box)`
  width: 172px;
  
  ${space}
  ${width}
  ${props => debuggableViewProp(props)}
`;

const FightbackLogoSvg = styled(SVG)`
  display: block;
  width: 100%;
`;

const FightbackLogo = props => (
  <StyledFightbackLogo {...props}>
    <FightbackLogoSvg />
  </StyledFightbackLogo>
);

export default FightbackLogo;
