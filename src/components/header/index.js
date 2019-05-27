import React, { Fragment } from "react";
import styled from "styled-components/macro";
import { Flex, Box, Link } from "rebass";

import { responsiveDisplayProp, debuggableViewProp } from "containers/theme";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";

const HeaderWrapper = styled(Flex)`
  position: relative;
  ${props => debuggableViewProp(props)}
`;

const LogoWrapper = styled(Box)`
  ${props => debuggableViewProp(props)}
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
    text-decoration: none;
  }
`;

const RightDecor = styled(Box)`
  position: absolute;
  left: 100%;
  top: 0;
  width: 415px;
  height: 100px;
  background-size: auto 112px;
  background-position: 0 100%;
  background-image: url("/images/accent.png");
  ${responsiveDisplayProp};
`;

const NavLink = props => (
  <StyledNavLink px={2} pt={2} pb={1} color="inherit" {...props} />
);

const MenuItems = () => (
  <Fragment>
    <Box>
      <NavLink href="#about">about</NavLink>
      <NavLink href="#attendance">attendance</NavLink>
    </Box>
    <Box>
      <NavLink href="#agenda">agenda // sessions</NavLink>
      <NavLink href="#speakers">speakers</NavLink>
    </Box>
    <Box>
      <NavLink href="#expect">what to expect</NavLink>
      <NavLink href="mailto:summit@fightback.community">participate</NavLink>
    </Box>
  </Fragment>
);

const Header = ({ debug = false }) => {
  let sectionProps = {
    debug,
  };

  return (
    <HeaderWrapper
      flexWrap="nowrap"
      justifyContent="space-between"
      pl={3}
      pr={[2, 2, "230px"]}
      pt={6}
      debug={debug}
    >
      <LogoWrapper alignSelf="center" pr={5} debug={debug}>
        <Logo debug={debug} width={140} {...sectionProps} />
      </LogoWrapper>
      <MobileMenu
        py={4}
        pr={3}
        pl={5}
        display={[true, false]}
        alignSelf="center"
        debug={debug}
      >
        <MenuItems />
      </MobileMenu>
      <Navigation
        py={4}
        pr={3}
        pl={5}
        display={[false, true]}
        alignSelf="center"
        justifyContent="space-between"
        flex="1"
        debug={debug}
        fontSize={2}
      >
        <MenuItems />
      </Navigation>
      <RightDecor display={[false, false, true]} ml="-220px" />
    </HeaderWrapper>
  );
};

export default Header;
