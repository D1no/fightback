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
const Header = ({ title = "Fightback Summit" }) => {
  return (
    <Flex
      py={[6, 8]}
      px={[4, 6]}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={[7 / 12, 4 / 12]}>
        <Logo mx={3} p={0} />
      </Box>
      <Box width={[5 / 12, 8 / 12]}>
        <Heading as="h2" data-test="title" color="light">
          {title}
        </Heading>
      </Box>
    </Flex>
  );
};

export default Header;
