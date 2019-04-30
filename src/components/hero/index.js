import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components/macro";

import { debuggableViewProp } from "containers/theme";
import Hook from "./hook";
import VideoWidget from "components/videowidget";

/**
 * Section style composition incl. a debug view for flexbox
 * behaviors.
 */
const Section = styled(Box)`
  ${props => debuggableViewProp(props)}
`;

const FullHeightWrapper = styled(Flex)`
  min-height: 100vh;
  ${props => debuggableViewProp(props)}
`;

const Top = styled(Section)``;

const MiddleStretch = styled(Section)``;

const Bottom = styled(Section)``;

const EventText = styled(Text)`
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

/**
 * Responsive Multi-Section Layout
 * Note: See story for composition options
 */
const Hero = ({
  debug = false,
  // Sections
  top = <Box>No components assigned.</Box>,
  middleStretch = <Box>No HERO Left assigned.</Box>,
  ...props
}) => {
  // Allow debug view through HOC
  let sectionProps = {
    debug,
  };

  return (
    <FullHeightWrapper
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      debug={sectionProps.debug}
    >
      <Top flex="" data-test="heroTop" {...sectionProps}>
        {top}
      </Top>
      <MiddleStretch data-test="heroMiddleStretch" {...sectionProps}>
        {/*
          Banner Location. Should be extracted into own component.
        */}
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box pr={7} py={[5, 0]} width={[12 / 12, 9 / 12, 8 / 12]}>
            <Hook width={1} />
          </Box>
          <Box pl={7} alignSelf="flex-end" flex="1">
            <EventText fontWeight="bold" fontSize={2}>
              {middleStretch}
            </EventText>
          </Box>
        </Flex>
        {/*
          / Banner Location
        */}
      </MiddleStretch>
      <Bottom flex="" data-test="heroBottom" {...sectionProps}>
        <VideoWidget />
        {props.children}
      </Bottom>
    </FullHeightWrapper>
  );
};

export default Hero;
