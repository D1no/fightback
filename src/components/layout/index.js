import React from "react";
import { Box, Flex } from "rebass";
import styled, { css } from "styled-components/macro";
import { style } from "styled-system";
import { ReactComponent as CenterHookSVG } from "./center-hook.svg";
import { responsiveDisplayProp, debuggableViewProp } from "containers/theme";

/**
 * Section style composition incl. a debug view for flexbox
 * behaviors.
 */
const Section = styled(Box)`
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;

/**
 * Responsive Multi-Section Layout
 * Note: See story for composition options
 */
const Layout = ({
  debug = false,
  p = 3,
  sectionHeader = <Box>No components assigned.</Box>,
  heroLeft = <Box>No HERO Left assigned.</Box>,
  heroRight = <Box>No HERO Right assigned.</Box>,
  sectionSidebarControl = <Box>No components assigned.</Box>,
  ...props
}) => {
  // Allow section styling from HOC
  let sectionProps = {
    debug,
    p,
  };

  return (
    <Flex flexWrap="wrap">
      <Section data-test="sectionHeader" {...sectionProps} width={1}>
        {sectionHeader}
      </Section>
      <>
        <Section
          data-test="heroLeft"
          {...sectionProps}
          width={[1, 8 / 12, 8 / 12]}
        >
          <CenterHookSVG style={{ height: "inherit", width: "inherit" }} />
        </Section>
        <Section
          data-test="heroRight"
          {...sectionProps}
          width={[0, 4 / 12, 4 / 12]}
          display={[false, true]}
        />
      </>
      <>
        <Section
          data-test="sectionContent"
          {...sectionProps}
          width={[1, 8 / 12, 8 / 12]}
        >
          {props.children}
        </Section>
        <Section
          data-test="sectionSidebarControl"
          {...sectionProps}
          width={[0, 4 / 12, 4 / 12]}
          display={[false, true]}
          style={{ flexDirection: "column" }}
        >
          {heroRight}
          {heroLeft}
          {sectionSidebarControl}
        </Section>
      </>
    </Flex>
  );
};

export default Layout;
