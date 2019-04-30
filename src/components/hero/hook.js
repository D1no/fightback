import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp } from "containers/theme";
import { ReactComponent as SVG } from "./center-hook.svg";

const SvgImage = styled(SVG)`
  ${space}
  ${width}
  display: block;
  // Styling of SVG logo
  ${props => debuggableViewProp(props)}
`;

const Hook = props => <SvgImage {...props} />;

export default Hook;
