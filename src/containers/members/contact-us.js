import React, { Component } from "react";
import styled from "styled-components";
import { space, width } from "styled-system";
import { Box, Flex, Text } from "rebass";

import { SubmitContactForm } from "providers/firebase";

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
  padding: 15px 20px;
  border: none;
  box-sizing: border-box;

  ${space}
  ${width}
`;
const Textarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.grey};
  padding: 15px 20px;
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

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { formSubmitted: false };
  }
  submitFormToFirebase = e => {
    e.preventDefault();

    const inputs = this.form.elements;

    const payload = {
      name: inputs["name"].value,
      position: inputs["position"].value,
      company: inputs["company"].value,
      email: inputs["email"].value,
      number: inputs["number"].value,
      text: inputs["text"].value,
    };

    SubmitContactForm(payload).then(() =>
      this.setState({ formSubmitted: true })
    );
  };
  render() {
    const { headerText, description } = this.props;
    const { formSubmitted } = this.state;

    return (
      <StyledContactUs {...this.props}>
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
              {formSubmitted ? (
                <Box mt={5}>
                  Thank you for submitting form. We'll get touch with you soon!
                </Box>
              ) : (
                <Form
                  mt={5}
                  action=""
                  onSubmit={this.submitFormToFirebase}
                  ref={form => (this.form = form)}
                >
                  <Input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    required
                  />
                  <Input type="text" placeholder="Position" name="position" />
                  <Input type="text" placeholder="Company" name="company" />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <Input type="tel" placeholder="Phone number" name="number" />
                  <Textarea
                    required
                    type="text"
                    placeholder="Enquiry text"
                    name="text"
                  />
                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Description>
          </Box>
        </Flex>
      </StyledContactUs>
    );
  }
}

export default ContactUs;
