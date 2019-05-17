import React from "react";
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { responsiveDisplayProp } from "containers/theme";

const Container = styled(Flex)``;
const Title = styled(Box)`
  ${responsiveDisplayProp}
`;
const Content = styled(Box)``;
const Aside = styled(Box)``;
const AsideTitle = styled(Box)`
  ${responsiveDisplayProp}
`;
const TitleDecoration = ({ children }) => (
  <Text fontWeight="bold" fontSize={3} lineHeight={5}>
    {children}
  </Text>
);

const ContentContainer = ({ children, title, aside }) => {
  return (
    <Container
      justifyContent="space-between"
      flexWrap={["wrap", "nowrap"]}
      width={1}
    >
      <Title width={[12 / 12]} display={[true, false]} mb={6}>
        <TitleDecoration>{title}</TitleDecoration>
      </Title>
      <Content width={[12 / 12, 8 / 12]} pr={[0, 9]} mb={6}>
        {children}
      </Content>
      <Aside width={[12 / 12, 4 / 12]} pl={[0, 6]} mb={6}>
        <AsideTitle display={[false, true]} mb={6}>
          <TitleDecoration>{title}</TitleDecoration>
        </AsideTitle>
        {aside}
      </Aside>
    </Container>
  );
};

export default ContentContainer;
