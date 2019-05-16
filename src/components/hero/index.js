import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components/macro";

import { debuggableViewProp, responsiveDisplayProp } from "containers/theme";
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

  // iPad portrait
  @media (max-width: 768px) and (max-height: 1024px) and (min-height: 1024px) {
    min-height: 70vh;
  }

  // Bigger than HD
  @media (min-height: 1081px) {
    min-height: 70vh;
  }
`;

const Top = styled(Section)``;

const MiddleStretch = styled(Section)`
  flex: 1 1 auto;
  display: flex;
`;

const Bottom = styled(Section)``;

const EventText = styled(Text)`
  ${responsiveDisplayProp}
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

const StretchWrapper = styled(Flex)`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 60%;
  }

  @media (min-height: 901px) {
    height: 45%;
  }
`;

const StretchText = styled(Text)`
  ${responsiveDisplayProp}
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

const EventDescriptionText = styled(EventText)`
  // iPhone X horizontal, aligned with iPad portrait font size
  @media (max-width: 812px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: ${props => props.theme.lineHeights[4]};
  }
`;

const VideoWrapper = styled(Box)``;

const Description = styled(Box)``;

/**
 * Responsive Multi-Section Layout
 * Note: See story for composition options
 */
const Hero = ({
  debug = false,
  // Sections
  top = <Box>No components assigned.</Box>,
  middleStretch = [
    <Box>No HERO Left assigned.</Box>,
    <Box>No HERO Left assigned.</Box>,
  ],
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
      <Top data-test="heroTop" {...sectionProps}>
        {top}
      </Top>
      <MiddleStretch
        data-test="heroMiddleStretch"
        {...sectionProps}
        pt={[0, 0, 5]}
        pb={[3, 3, 5]}
      >
        {/*
          Banner Location. Should be extracted into own component.
        */}
        <Flex
          justifyContent="space-between"
          flexWrap={["wrap", "nowrap"]}
          width={1}
        >
          <Flex pr={[8, 8]} pl={[8, 7]} width={[12 / 12, 8 / 12]}>
            <Hook width={1} mx={{ xl: -12 }} />
          </Flex>
          <StretchWrapper
            pl={[6, 0, 6]}
            flex="1"
            flexDirection="column"
            alignSelf="flex-end"
          >
            <StretchText fontSize={3} display={[true, false]} mb={4}>
              <Text fontWeight="bold">{middleStretch[0]}</Text>
            </StretchText>
            <StretchText fontSize={3} display={[false, true]}>
              <Text fontWeight="bold" mb={3}>
                {middleStretch[0]}
              </Text>
              {middleStretch[1]}
            </StretchText>
          </StretchWrapper>
        </Flex>
        {/*
          / Banner Location
        */}
      </MiddleStretch>
      <Bottom flex="" data-test="heroBottom" {...sectionProps}>
        <Flex
          justifyContent="space-between"
          flexWrap={["wrap", "nowrap"]}
          pb={[4, 4, 4, 9]}
        >
          <VideoWrapper width={[12 / 12, 8 / 12]} px={[0, 8]}>
            <VideoWidget />
          </VideoWrapper>
          <Description
            pl={[6, 0, 6]}
            pb={9}
            pt={3}
            alignSelf="flex-end"
            flex="1"
          >
            <EventDescriptionText
              fontSize={[2, 5]}
              lineHeight={[2, 5]}
              py={[5, 0]}
              fontWeight="light"
            >
              {props.children}
            </EventDescriptionText>
            <EventText fontSize={3} display={[true, false]} lineHeight={6}>
              {middleStretch[1]}
            </EventText>
          </Description>
        </Flex>
      </Bottom>
    </FullHeightWrapper>
  );
};

export default Hero;
