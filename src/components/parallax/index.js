import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { space } from "styled-system";

const ParallaxPlaceholder = styled(Parallax)`
  ${space}
  position: relative;
  height: 0;

  :before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }
`;

const ParallaxComponent = props => {
  const screenRatio = window.innerHeight / window.innerWidth;
  let ParallaxStrength = 300;

  if (typeof window !== "undefined" && screenRatio > 1.3) {
    ParallaxStrength = screenRatio > 1.5 ? 30 : 50;
  }

  return <ParallaxPlaceholder strength={ParallaxStrength} {...props} />;
};

export default ParallaxComponent;
