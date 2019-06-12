import React from "react";
import styled from "styled-components";

import { ReactComponent as SVG } from "./angled-divider.svg";

const DecoratedAngledDivider = styled(SVG)`
  display: block;
  height: 120px;
  width: 100%;
  min-width: 1500px;
  transform: scale(
    ${props => (props.styleprops.mirror ? "-" : "")}1,
    ${props => (props.styleprops.flip ? "-" : "")}1
  );
  fill: ${props =>
    props.styleprops.fill
      ? props.theme.colors[props.styleprops.fill]
        ? props.theme.colors[props.styleprops.fill]
        : props.styleprops.fill
      : "#f0f0f0"};
`;

const AngledDivider = props => {
  return <DecoratedAngledDivider styleprops={{ ...props }} />;
};

export default AngledDivider;
