import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./logo-black.svg";

const SvgLogo = styled(SVG)`
  ${space}
  ${width}
  display: block;
  // Styling of SVG logo
  ${props => debuggableViewProp(props)}
`;

const Logo = props => (
  <SvgLogo {...props} debug={props.debug ? true : undefined} />
);

export default Logo;
