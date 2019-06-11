import React from "react";
import styled from "styled-components";

import { ReactComponent as SVG } from "./angled-divider.svg";

const DecoratedAngledDivider = styled(SVG)`
  display: block;
  height: 120px;
  width: 100%;
  min-width: 1500px;
  transform: scale(
    ${props => (props.mirror ? "-" : "")}1,
    ${props => (props.flip ? "-" : "")}1
  );
  fill: ${props =>
    props.fill
      ? props.theme.colors[props.fill]
        ? props.theme.colors[props.fill]
        : props.fill
      : "#f0f0f0"};
`;

const AngledDivider = props => {
  return <DecoratedAngledDivider {...props} />;
};

export default AngledDivider;
