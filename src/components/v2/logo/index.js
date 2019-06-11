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

  .main-text {
    fill: ${props => (props.inverted ? "white" : "#171728")};
  }
`;

const FightbackLogo = props => (
  <StyledFightbackLogo {...props}>
    <FightbackLogoSvg inverted={props.inverted} />
  </StyledFightbackLogo>
);

export default FightbackLogo;
