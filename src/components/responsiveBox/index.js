import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import { responsiveDisplayProp } from "containers/theme";

const ExtendedBox = styled(Box)`
  ${responsiveDisplayProp}
`;

const responsiveBox = props => {
  return <ExtendedBox {...props}>{props.children}</ExtendedBox>;
};

export default responsiveBox;
