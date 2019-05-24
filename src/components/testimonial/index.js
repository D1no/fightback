import React from "react";
import styled from "styled-components";
import { Box, Text, Flex } from "rebass";

const Container = styled(Box)``;
const Header = styled(Box)``;
const Name = styled(Text)``;
const Position = styled(Text)``;
const Grid = styled(Flex)``;
const Image = styled(Box)`
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    max-height: 245px;
  }
  border-radius: 18px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`;
const Description = styled(Flex)`
  min-width: 300px;
`;
const TestimonialText = styled(Text)``;
const DescriptionText = styled(Text)``;

const Testimonial = props => {
  const {
    children,
    text,
    image,
    testimonial,
    position,
    name,
    styledImageContainer,
  } = props;

  return (
    <Container {...props}>
      <Header ml={[0, 4]} mb={3}>
        <Name fontWeight="medium">{name}</Name>
        <Position fontWeight="light">{position}</Position>
      </Header>
      <Grid flexWrap={["wrap", "nowrap"]}>
        <Image width={[12 / 12, "245px"]} mb={3} as={styledImageContainer}>
          <img src={image} alt={name} />
        </Image>
        <Description
          ml={[0, 4, 7]}
          flex={1}
          flexDirection={"column"}
          justifyContent={"center"}
          mb={3}
        >
          <TestimonialText fontWeight="medium" fontSize={5} mb={3}>
            {testimonial}
          </TestimonialText>
          {text ? (
            <DescriptionText fontWeight="light">{text}</DescriptionText>
          ) : null}
        </Description>
      </Grid>
      {children}
    </Container>
  );
};

export default Testimonial;
