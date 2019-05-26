import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fade from "react-reveal/Fade";
import { responsiveDisplayProp, debuggableViewProp } from "containers/theme";
import styled from "styled-components/macro";
import { Box } from "rebass";
import MobileMenuIcon from "./mobile-menu-icon";
import MobileCloseIcon from "./mobile-close-icon";

const StyledMobileMenu = styled(Box)`
  ${responsiveDisplayProp}
  ${props => debuggableViewProp(props)}
`;

const MobileMenuCotainer = styled(Box)`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  width: 100%;
`;

const DimmedBackground = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const SlideOut = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background: ${props => props.theme.colors.white};
`;

const CloseBtn = styled(MobileCloseIcon)`
  position: absolute;
  right: 0;
  top: 0;
`;

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { showMobileMenu: false };

    window.onhashchange = () => {
      this.hideMenu();
    };
  }

  showMenu = () => {
    this.setState({ showMobileMenu: true });
  };

  hideMenu = () => {
    this.setState({ showMobileMenu: false });
  };

  render() {
    const { showMobileMenu } = this.state;
    const { children } = this.props;
    const rootNode = document.querySelector("#root");

    return (
      <StyledMobileMenu {...this.props}>
        <MobileMenuIcon onClick={this.showMenu} />
        {ReactDOM.createPortal(
          <MobileMenuCotainer>
            <Fade
              collapse
              when={showMobileMenu}
              mountOnEnter
              unmountOnExit
              duration={300}
            >
              <DimmedBackground onClick={this.hideMenu} />
            </Fade>

            <Fade
              collapse
              when={showMobileMenu}
              right
              mountOnEnter
              unmountOnExit
              duration={500}
            >
              <SlideOut p={9}>
                <CloseBtn onClick={this.hideMenu} m={5} />
                {children}
              </SlideOut>
            </Fade>
          </MobileMenuCotainer>,
          rootNode
        )}
      </StyledMobileMenu>
    );
  }
}
