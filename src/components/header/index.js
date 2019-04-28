import React from "react";
import styled from "styled-components/macro";
import { Heading, Flex, Box, Text } from "rebass";
import { ReactComponent as SvgLogo } from "./logo-black.svg";

// TODO: Make Logo responsive via responsive props
const Logo = styled(SvgLogo)`
  // Styling of SVG logo
`;

// TODO: Make Component View debuggable (background)
// TODO: Align Logo with badges of cards
const Header = ({
  title = "Fightback Summit",
  subtitle = "Fightback Summit Nr. 3",
}) => {
  return (
    <Flex
      py={6}
      px={8}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={3 / 12}>
        <Logo mx={4} p={0} />
      </Box>
      <Box width={9 / 12}>
        <Heading as="h2" data-test="title" color="light" fontFamily="accent">
          {title}
        </Heading>
        <Text data-test="subtitle" fontSize={3} color="light">
          {subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
