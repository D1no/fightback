import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

import AngledDivider from "../angledDivider";

const DecoratedAngledContainer = styled(Box)``;
const DecoratedAngledContainerContent = styled(Box)`
  background-color: ${props =>
    props.background
      ? props.theme.colors[props.background]
        ? props.theme.colors[props.background]
        : props.background
      : "#f0f0f0"};
`;

const AngledContainer = props => {
  const { right, left, mirror, background, children, top, bottom } = props;

  return (
    <DecoratedAngledContainer {...props}>
      {!bottom ? (
        <AngledDivider
          mirror={right ? false : left || mirror}
          fill={background}
        />
      ) : null}

      <DecoratedAngledContainerContent background={background}>
        {children}
      </DecoratedAngledContainerContent>
      {!top ? (
        <AngledDivider flip mirror={right || mirror} fill={background} />
      ) : null}
    </DecoratedAngledContainer>
  );
};

export default AngledContainer;
