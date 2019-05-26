import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./icon-close.svg";

const SvgMenu = styled(SVG)`
  ${space}
  ${width}
  height: 18px;
  display: block;
  // Styling of SVG logo
  ${props => debuggableViewProp(props)}
`;

const MobileCloseIcon = props => <SvgMenu {...props} />;

export default MobileCloseIcon;
