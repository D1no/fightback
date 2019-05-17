import React from "react";
import PropTypes from "prop-types";
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

const VideoOverlayText = styled(Text)`
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;

  color: ${props => props.theme.colors.white};
`;

const VideoWidget = ({ videoLink, videoSrc, text }) => (
  <VideoMask width={1}>
    <Link href={videoLink} target="_blank">
      <Overlay p={0} m={0}>
        <video
          id="background-video"
          loop
          autoPlay
          muted
          playsInline
          width="100%"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {text ? (
          <VideoOverlayText
            mr="5%"
            mb="3%"
            width={[1 / 3, 1 / 2, 1 / 4]}
            fontSize={[1, 4]}
          >
            {text}
          </VideoOverlayText>
        ) : null}
      </Overlay>
    </Link>
  </VideoMask>
);

VideoWidget.propTypes = {
  videoLink: PropTypes.string,
  videoSrc: PropTypes.string,
  text: PropTypes.string,
};

export default VideoWidget;
