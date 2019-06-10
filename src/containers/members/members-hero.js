import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";
import { Box, Flex, Text } from "rebass";

import MarkdownText from "../../components/v2/markdownText";

import { ReactComponent as SVG } from "./members-hero.svg";

const MembersHeroSVG = styled(SVG)`
  display: block;
  margin-top: -10vh;
  ${space}
  ${width}
`;

const StyledMembersHero = styled(Box)``;
const Header = styled.h1`
  margin: 0;
  font-size: inherit;
  ${space}
`;
const Description = styled(Text)``;
const StyledHeaderTextBold = styled(Text)`
  p {
    margin-block-end: 0;
  }
`;
const Features = styled(Flex)``;
const FeatureItem = styled(Flex)`
  border-top: solid 1px ${props => props.theme.colors.default};

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    border-top: none;
    border-left: solid 1px ${props => props.theme.colors.default};
  }
`;

const FeatureItemText = props => (
  <Text fontSize={5} fontWeight={"bold"} {...props}>
    {props.children}
  </Text>
);

const HeaderTextLight = props => (
  <Text fontSize={[4, 6]} color={"dark"} my={2}>
    {props.children}
  </Text>
);

const HeaderTextBold = props => (
  <StyledHeaderTextBold
    fontSize={["40px", 9]}
    lineHeight={0}
    color={"accent"}
    {...props}
  >
    {props.children}
  </StyledHeaderTextBold>
);

const MembersHero = props => {
  const { headerText, description, features } = props;
  const featuresColorsHash = ["purple", "green", "yellow"];

  return (
    <StyledMembersHero {...props}>
      <Flex
        flexDirection={["column", "column", "row-reverse"]}
        justifyContent={"space-between"}
      >
        <Flex
          width={[12 / 12, 12 / 12, 4 / 12]}
          flexDirection="column"
          alignItems={["center", "flex-end", "center"]}
          mb={[7, 0, 9]}
        >
          <MembersHeroSVG width={["55%", "40%", "100%"]} mr={[0, 7, 0]} />
        </Flex>
        <Box width={[12 / 12, 12 / 12, 7 / 12]} mb={[7, 9]}>
          <Header mb={7}>
            <HeaderTextLight>{headerText[0]}</HeaderTextLight>
            <HeaderTextBold>
              <MarkdownText source={headerText[1]} />
            </HeaderTextBold>
            <HeaderTextLight>{headerText[2]}</HeaderTextLight>
            <HeaderTextBold>
              <MarkdownText source={headerText[3]} />
            </HeaderTextBold>
          </Header>
          <Description fontSize={5} mb={7} width={[12 / 12, 8 / 12, 12 / 12]}>
            <MarkdownText source={description} />
          </Description>
          <Features flexDirection={["column", "row"]}>
            {features.map((feature, index) => (
              <FeatureItem
                pl={[0, 3]}
                pr={[0, 6]}
                width={[12 / 12, 4 / 12]}
                py={[5, 0]}
              >
                <FeatureItemText color={featuresColorsHash[index]}>
                  {feature}
                </FeatureItemText>
              </FeatureItem>
            ))}
          </Features>
        </Box>
      </Flex>
    </StyledMembersHero>
  );
};

export default MembersHero;
