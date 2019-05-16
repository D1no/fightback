import React from "react";
import styled from "styled-components/macro";
import { Flex, Box, Link } from "rebass";

import { responsiveDisplayProp, debuggableViewProp } from "containers/theme";
import Logo from "./logo";
import Icon from "./icon";

const HeaderWrapper = styled(Flex)`
  ${props => debuggableViewProp(props)}
`;

const LogoWrapper = styled(Box)`
  ${props => debuggableViewProp(props)}
`;

const MobileMenu = styled(Box)`
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;

const RightDecor = styled(Box)`
  ${responsiveDisplayProp}
`;

const Navigation = styled(Flex)`
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;

const StyledNavLink = styled(Link)`
  display: block;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: ${props => props.theme.colors.blue};
  }
`;

const NavLink = props => (
  <StyledNavLink px={2} pt={2} pb={1} color="inherit" fontSize={2} {...props} />
);

const Header = ({ debug = false, hideMenu = false }) => {
  let sectionProps = {
    debug,
  };

  return (
    <HeaderWrapper
      flexWrap="nowrap"
      justifyContent="space-between"
      ml={3}
      mr={2}
      mt={6}
      mb={6}
      debug={debug}
    >
      <LogoWrapper alignSelf="center" pr={5} debug={debug}>
        <Logo debug={debug} width={140} {...sectionProps} />
      </LogoWrapper>
      <MobileMenu
        py={4}
        pr={3}
        pl={5}
        display={!hideMenu && [true, false]}
        alignSelf="center"
        debug={debug}
      >
        <Icon />
      </MobileMenu>
      <Navigation
        py={4}
        pr={3}
        pl={5}
        display={!hideMenu && [false, true]}
        alignSelf="center"
        justifyContent="space-around"
        flex="1"
        debug={debug}
      >
        <Box>
          <NavLink href="#">about</NavLink>
          <NavLink href="#">attendance</NavLink>
        </Box>
        <Box>
          <NavLink href="#">what to expect</NavLink>
          <NavLink href="#">agenda // sessions</NavLink>
        </Box>
        <Box>
          <NavLink href="#">speakers</NavLink>
          <NavLink href="#">participate</NavLink>
        </Box>
      </Navigation>
      <RightDecor width={[0, 1 / 12, 2 / 12]} display={[false, true]} />
    </HeaderWrapper>
  );
};

export default Header;
