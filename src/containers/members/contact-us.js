import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";
import { Box, Flex, Text } from "rebass";

import MarkdownText from "components/v2/markdownText";
import Title from "components/v2/title";

const ContactUsGraphics = styled(Box)`
  ${space}
  ${width}
  
  img {
    width: 100%;
  }
`;

const Form = styled.form`
  display: block;
  ${space}
  ${width}
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.grey};
  height: 53px;
  line-height: 53px;
  padding: 0 20px;
  border: none;
  box-sizing: border-box;

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

const StyledContactUs = styled(Box)``;
const Header = styled.h2`
  margin: 0;
  font-size: inherit;
  ${space}
`;
const Description = styled(Text)``;

const ContactUs = props => {
  const { headerText, description } = props;

  return (
    <StyledContactUs {...props}>
      <Flex
        flexDirection={["column", "row-reverse"]}
        justifyContent={"space-between"}
      >
        <Flex
          width={[12 / 12, 4 / 12]}
          flexDirection="column"
          alignItems={["flex-end", "flex-end", "center"]}
          mb={[7, 7, 9]}
        >
          <ContactUsGraphics width={["55%", "100%"]} mr={[0, 7, 0]}>
            <img src="/media/contact-us.jpg" alt="Contact us graphics" />
          </ContactUsGraphics>
        </Flex>
        <Box width={[12 / 12, 6 / 12]} mb={[0, 9]}>
          <Header mb={6}>
            <Title>{headerText}</Title>
          </Header>
          <Description width={[12 / 12]}>
            <MarkdownText source={description} />
            <Form
              mt={5}
              post="/"
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <Input type="text" placeholder="Full name" />
              <Input type="text" placeholder="Position" />
              <Input type="text" placeholder="Company" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone number" />
              <Button type="submit">Submit</Button>
            </Form>
          </Description>
        </Box>
      </Flex>
    </StyledContactUs>
  );
};

export default ContactUs;
