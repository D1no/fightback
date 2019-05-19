import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

import SideText from "components/sideText";
import ContentContainer from "components/contentContainer";

const Container = styled(Box)`
  border-top: 2px solid ${props => props.theme.colors.gray};
`;

const StyledContentContainer = styled(ContentContainer)`
  background: ${props => props.theme.colors.backgroundColor};
`;

const Footer = props => {
  const { aside, children, title, id } = props;

  return (
    <Container mt={9} {...props} pt={5}>
      <StyledContentContainer
        title={title}
        id={id}
        aside={<SideText>{aside}</SideText>}
        mt={0}
        pt={5}
        mb={0}
        pb={10}
      >
        <SideText ml={[0, 6]} width={[12 / 12, 7 / 12]}>
          {children}
        </SideText>
      </StyledContentContainer>
    </Container>
  );
};

export default Footer;
