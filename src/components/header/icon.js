import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./icon-menu.svg";

const SvgMenu = styled(SVG)`
  ${space}
  ${width}
  height: 30px;
  display: block;
  // Styling of SVG logo
  ${props => debuggableViewProp(props)}
`;

const Icon = props => <SvgMenu {...props} />;

export default Icon;
