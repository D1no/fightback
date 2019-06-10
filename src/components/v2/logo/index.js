import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./fightback-logo.svg";

const FightbackLogoSvg = styled(SVG)`
  display: block;
  width: 172px;
  
  ${space}
  ${width}
  ${props => debuggableViewProp(props)}
`;

const FightbackLogo = props => <FightbackLogoSvg {...props} />;

export default FightbackLogo;
