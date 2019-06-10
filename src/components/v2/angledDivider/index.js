import React from "react";
import styled from "styled-components";

import { ReactComponent as SVG } from "./angled-divider.svg";

const DecoratedAngledDivider = styled(SVG)`
  display: block;
  height: 120px;
  width: 100%;
  fill: ${props =>
    props.fill
      ? props.theme.colors[props.fill]
        ? props.theme.colors[props.fill]
        : props.fill
      : "#f0f0f0"};
`;

const AngledDivider = props => {
  const transform = `scale(${props.mirror ? "-" : ""}1,${
    props.flip ? "-" : ""
  }1)`;

  return <DecoratedAngledDivider transform={transform} fill={props.fill} />;
};

export default AngledDivider;
