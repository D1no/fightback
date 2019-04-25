import React from "react";
import styled from "styled-components/macro";
import { Heading, Flex, Box, Text } from "rebass";

// TODO: Make Logo responsive via responsive props
const Logo = styled(Flex)`
  border-radius: 100%;
  height: 42px;
  width: 42px;
`;

// TODO: Make Component View debuggable (background)
// TODO: Align Logo with badges of cards
const Header = ({
  short = "F",
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
      <Box width={1 / 5}>
        <Logo
          mx={4}
          p={0}
          alignItems="center"
          justifyContent="center"
          fontSize={6}
          bg="#222"
        >
          <Text color="white" fontFamily="arbutus-slap">
            {short}
          </Text>
        </Logo>
      </Box>
      <Box width={4 / 5}>
        <Heading
          as="h2"
          data-test="title"
          color="light"
          fontFamily="arbutus-slap"
        >
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
