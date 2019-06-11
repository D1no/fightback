import React from "react";
import styled from "styled-components";
import { Box, Flex, Text, Link } from "rebass";

import AngledContainer from "../../components/v2/angledContainer";
import Wrapper from "../../components/v2/wrapper";
import MarkdownText from "../../components/v2/markdownText";
import Title from "../../components/v2/title";
import { ReactComponent as CircleClip } from "./circle-clip.svg";
import { ReactComponent as ArrowSVG } from "./arrow.svg";
import { responsiveDisplayProp } from "../../containers/theme";

const StyledCircleClip = styled(CircleClip)`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;

const MembersTitle = styled(Text)`
  white-space: pre-wrap;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    text-align: center;
  }
`;
const Description = styled(Box)`
  position: relative;
  z-index: 1;
  line-height: 1.4;
`;
const MembersList = styled(Flex)``;
const MemberItem = styled(Box)`
  text-align: center;
`;
const Image = styled(Box)`
  width: 100%;
  position: relative;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  clip-path: url(#circle-clip);

  img {
    z-index: -1;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
const ImageHolder = styled(Box)`
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: top center;
}
`;
const Name = styled(Text)``;
const Position = styled(Text)``;
const Delimeter = styled(Box)`
  ${responsiveDisplayProp}
  height: 0;
  width: 100%;
`;

const MoreButton = styled(Text)`
  display: inline-block;
  border-bottom: 1px solid ${props => props.theme.lightGreen};
`;

const ShowMoreContainer = styled(Link)`
  display: block;
  align-self: center;
  cursor: pointer;

  // TODO:temp hide show more button
  visibility: hidden;

  :hover {
    text-decoration: none;
  }
  :hover ${MoreButton} {
    border-bottom-color: transparent;
  }
`;

const StyledArrowSVG = styled(ArrowSVG)`
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
`;

const Community = props => {
  const { title, description, people } = props;
  const preparedPeopleList = [...people];

  preparedPeopleList.splice(
    1,
    0,
    <Delimeter display={[false, false, true]} key="delimeter" />
  );

  return (
    <>
      <AngledContainer background={"grey"} mb={[6, 6, 0]}>
        <Wrapper>
          <Title as={"h2"} mb={7}>
            <Text color={"dark"}>{title[0]}</Text>
            <MarkdownText source={title[1]} />
          </Title>
          <Description width={[12 / 12, 12 / 12, 7 / 12]}>
            <MarkdownText source={description} />
          </Description>
        </Wrapper>
      </AngledContainer>
      <Wrapper mt={[0, 0, "-610px"]}>
        <Flex
          alignItems={["flex-start", "flex-start", "flex-end"]}
          flexDirection={"column"}
        >
          <MembersTitle fontSize={3} fontWeight="bold" width={280}>
            JUST A FEW{"\n"}
            OF OUR{"\n"}
            MEMBERS:
          </MembersTitle>
          <MembersList
            flexWrap={"wrap"}
            flexDirection={"row"}
            alignItems={"start"}
            justifyContent={["space-between", "space-between", "flex-end"]}
            ml={[0, 0, -7]}
          >
            <StyledCircleClip />
            {preparedPeopleList.map((person, index) => {
              if (!(person.name && person.image)) {
                return person;
              }

              return (
                <MemberItem
                  mt={7}
                  ml={[0, 0, 7]}
                  width={["45%", "45%", "24%"]}
                  key={index}
                >
                  <Image mb={4}>
                    <ImageHolder src={person.image} />
                    <img src={person.image} alt={person.name} />
                  </Image>
                  <Text fontSize={[2, 4]}>
                    <Name color="accent" mb={1}>
                      {person.name}
                    </Name>
                    <Position color="accent">{person.company}</Position>
                  </Text>
                </MemberItem>
              );
            })}
            <ShowMoreContainer ml={[0, 0, "60px"]} color="lightGreen">
              <MoreButton fontWeight="bold" fontSize={3} pb={1}>
                MORE
              </MoreButton>
              <StyledArrowSVG />
            </ShowMoreContainer>
          </MembersList>
        </Flex>
      </Wrapper>
    </>
  );
};

export default Community;
