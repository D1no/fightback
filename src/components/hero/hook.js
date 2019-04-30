import React from "react";
import styled from "styled-components/macro";
import { space, width } from "styled-system";

import { debuggableViewProp, responsiveDisplayProp } from "containers/theme";
import { ReactComponent as SVG } from "./center-hook.svg";
import { ReactComponent as SVGMobile } from "./hook.svg";

const SvgImageLarge = styled(SVG)`
  ${space}
  ${width}
  display: block;
  // Styling of SVG logo
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;
const SvgImageSmall = styled(SVGMobile)`
  ${space}
  ${width}
  display: block;
  // Styling of SVG logo
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;

const Hook = props => (
  <>
    <SvgImageLarge display={[false, true]} {...props} />
    <SvgImageSmall display={[true, false]} {...props} />
  </>
);

export default Hook;
