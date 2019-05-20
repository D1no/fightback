import React from "react";
import styled from "styled-components";
import { Box, Text, Flex } from "rebass";

const Container = styled(Box)``;
const Footer = styled(Flex)`
  min-height: 85px;
`;
const Name = styled(Text)``;
const Position = styled(Text)``;
const Image = styled(Box)`
  border-radius: 18px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`;

const renderPersonDetails = ({ name, position }) => (
  <Box width={[12 / 12]}>
    <Name fontWeight="medium">{name}</Name>
    <Position fontWeight="light">{position}</Position>
  </Box>
);

const PersonCard = props => {
  const { children, image, position, name, double, grid } = props;

  return (
    <Container {...props}>
      <Image mb={4}>
        <img src={image} alt={name} />
      </Image>
      <Footer ml={[0, 0, 4]}>
        {double && grid
          ? grid.map((item, index) => (
              <Box width={[6 / 12]} px={[0, 0, 4]} key={index}>
                {renderPersonDetails(item)}
              </Box>
            ))
          : renderPersonDetails({ name, position })}
      </Footer>
      {children}
    </Container>
  );
};

export default PersonCard;
