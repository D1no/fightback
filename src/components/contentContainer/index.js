import React from "react";
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { responsiveDisplayProp } from "containers/theme";

const Wrapper = styled(Box)``;
const Container = styled(Flex)``;
const Header = styled(Box)``;
const Title = styled(Box)`
  ${responsiveDisplayProp}

  a {
    color: ${props => props.theme.colors.black};
  }
`;
const Content = styled(Box)``;
const Aside = styled(Box)``;
const AsideTitle = styled(Box)`
  ${responsiveDisplayProp}
  a {
    color: ${props => props.theme.colors.black};
  }
`;
const TitleDecoration = ({ children }) => (
  <Text fontWeight="bold" fontSize={3} lineHeight={5}>
    {children}
  </Text>
);

const ContentContainer = props => {
  const { children, containerTitle: title, aside, header, styledAside } = props;

  return (
    <Wrapper width={1} mt={[5, 9]} pt={9} mb={[5, 9]} {...props}>
      {header ? (
        <Header width={1} mt={-9}>
          {header}
        </Header>
      ) : null}
      <Container
        justifyContent="space-between"
        flexWrap={["wrap", "nowrap"]}
        width={1}
      >
        {title ? (
          <Title width={[12 / 12]} display={[true, false]} mb={6}>
            <TitleDecoration>{title}</TitleDecoration>
          </Title>
        ) : null}
        <Content width={[12 / 12, 8 / 12]} pr={[0, 7]} mb={6}>
          {children}
        </Content>
        <Aside width={[12 / 12, 4 / 12]} pl={[0, 7]} as={styledAside}>
          {title ? (
            <AsideTitle display={[false, true]} mb={6}>
              <TitleDecoration>{title}</TitleDecoration>
            </AsideTitle>
          ) : null}
          {aside}
        </Aside>
      </Container>
    </Wrapper>
  );
};

export default ContentContainer;
