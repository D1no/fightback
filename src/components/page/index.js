import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

import { responsiveDisplayProp } from "containers/theme";
import Wrapper from "components/wrapper";
import ContentContainer from "components/contentContainer";

const DecoratedPage = styled(Box)`
  position: relative;
  min-height: 100vh;
`;

const SeparatorContainer = styled.div`
  ${responsiveDisplayProp}

  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    top: 100vh;
  }

  @media (max-height: 767px) {
    display: none;
  }

  * {
    height: 100%;
  }
`;

const StyledBorder = styled.div`
  border-left: 2px solid ${props => props.theme.colors.gray};
`;

const Page = props => {
  return (
    <DecoratedPage {...props}>
      <SeparatorContainer display={[false, true]}>
        <Wrapper>
          <ContentContainer mt={0} pt={0} mb={0} styledAside={StyledBorder} />
        </Wrapper>
      </SeparatorContainer>
      {props.children}
    </DecoratedPage>
  );
};

export default Page;
