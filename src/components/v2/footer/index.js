import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";
import { Box, Flex, Link, Text } from "rebass";

import { responsiveDisplayProp } from "containers/theme";

import Logo from "components/v2/logo";
import Wrapper from "components/v2/wrapper";
import AngledContainer from "components/v2/angledContainer";

const DecoratedFooter = styled(Box)``;

const Form = styled.form`
  display: flex;
  ${space}
  ${width}
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  height: 53px;
  line-height: 53px;
  padding: 0 20px;
  border: none;
  box-sizing: border-box;
  margin-right: 8px;

  ${space}
  ${width}
`;
const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  height: 53px;
  line-height: 53px;
  padding: 0 40px;
  color: white;
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: bold;
  text-transform: uppercase;
  border: none;
`;

const Header = styled(Text)`
  white-space: pre-wrap;
`;

const LinksList = styled(Box)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LogoContainer = styled(Box)`
  ${responsiveDisplayProp}
`;

const StyledListLink = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.colors.defaultInverted};
  text-decoration: none;
  margin-right: 20px;

  :hover {
    text-decoration: underline;
  }
`;

const LinkListItem = props => (
  <StyledListLink {...props} fontSize={3}>
    {props.children}
  </StyledListLink>
);

const Footer = props => {
  return (
    <DecoratedFooter>
      <AngledContainer
        background={"dark"}
        top
        mirror
        contentPT={[7, 7, 9]}
        contentPB={7}
      >
        <Wrapper>
          <Flex flexDirection={["row"]} justifyContent={"space-between"}>
            <LogoContainer display={[false, true]} width={[12 / 12, 5 / 12]}>
              <Logo inverted="true" width={[110, 172]} />
            </LogoContainer>
            <Box width={[12 / 12, 6 / 12, 5 / 12]}>
              <Header
                mb={4}
                fontSize={6}
                fontWeight="bold"
                color="white"
                lineHeight={0}
              >
                RECEIVE OUR{"\n"}
                LATEST UPDATES
              </Header>
              <Form
                mb={9}
                post="/"
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <Input type="email" placeholder="Email" />
                <Button type="submit">Go</Button>
              </Form>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column-reverse", "row"]}
            justifyContent={"space-between"}
          >
            <Box width={[12 / 12, 5 / 12]}>
              <Text fontSize={3}>© 2019 Fightback. All rights reserved.</Text>
            </Box>
            <Box width={[12 / 12, 6 / 12, 5 / 12]} mb={[5, 0]}>
              <LinksList>
                <LinkListItem
                  href="https://www.factor10.io/privacy/"
                  target="_blank"
                >
                  Privacy Policy
                </LinkListItem>
                <LinkListItem
                  href="https://www.factor10.io/imprint/"
                  target="_blank"
                >
                  Imprint
                </LinkListItem>
              </LinksList>
            </Box>
          </Flex>
        </Wrapper>
      </AngledContainer>
    </DecoratedFooter>
  );
};

export default Footer;
