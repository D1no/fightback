import React from "react";
import { Box, Flex, Text, Link } from "rebass";
import styled from "styled-components/macro";

import { debuggableViewProp } from "containers/theme";

const VideoMask = styled(Box)``;

const Overlay = styled(Box)`
  position: relative;

  :before {
    content: "";
    position: absolute;
    opacity: 0.3;
    background-image: linear-gradient(135deg, #35a8fb 0%, #227af0 100%);
    mix-blend-mode: multiply;
    border-radius: 18px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  video {
    display: block;
    width: 100%;
    border-radius: 18px;
  }
`;

const VideoWidget = props => (
  <VideoMask width={1} py={8}>
    <Link href="https://www.youtube.com/watch?v=iuG5lgNDjbk" target="_blank">
      <Overlay p={0} m={0}>
        <video id="background-video" loop autoPlay muted width="100%">
          <source
            src="/media/co-creation-2018-teaser-no-sound.01.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Overlay>
    </Link>
  </VideoMask>
);

export default VideoWidget;
