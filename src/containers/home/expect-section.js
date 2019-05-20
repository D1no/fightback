import React from "react";
import { Box } from "rebass";

import Title from "components/title";
import ContentContainer from "components/contentContainer";
import SideText from "components/sideText";
import MarkdownText from "components/markdownText";
import Testimonial from "components/testimonial";

export default ({ data }) => {
  const { title, panelmarkdown, attendees } = data;
  return (
    <ContentContainer
      containerTitle="what to expect"
      id="expect"
      aside={
        <SideText>
          <MarkdownText source={panelmarkdown} />
        </SideText>
      }
    >
      <Box pr={[0, 0, 6]}>
        <Title>{title}</Title>
        <Box ml={[0, 0, 6]}>
          {attendees.map((item, index) => (
            <Testimonial {...item} key={`${index}-${item.name}`} mb={[8, 4]} />
          ))}
        </Box>
      </Box>
    </ContentContainer>
  );
};
