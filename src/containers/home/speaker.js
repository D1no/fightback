import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

import ContentContainer from "components/contentContainer";
import SideText from "components/sideText";
import MarkdownText from "components/markdownText";
import Testimonial from "components/testimonial";

const Bio = styled(Text)`
  border-left: 2px solid ${props => props.theme.colors.gray};
`;

export default ({ data }) => {
  const {
    firstName,
    lastName,
    position,
    companyOrganization,
    speakerTopic,
    shortbio,
    fightbackMeaning,
    speakerPictureId,
  } = data;
  if (
    !(
      firstName &&
      lastName &&
      position &&
      companyOrganization &&
      speakerTopic &&
      speakerPictureId
    )
  ) {
    return null;
  }

  return (
    <ContentContainer
      aside={
        fightbackMeaning ? (
          <SideText mt={10} display={[false, true]}>
            <MarkdownText source={fightbackMeaning} />
          </SideText>
        ) : null
      }
      my={0}
      pt={0}
    >
      <Testimonial
        name={`${firstName} ${lastName}`}
        position={`${position} at ${companyOrganization}`}
        image={`https://drive.google.com/uc?id=${speakerPictureId}`}
        testimonial={speakerTopic}
        mb={[8, 4]}
      >
        {shortbio ? (
          <Bio
            ml={[0, 4]}
            pl={[4, 7]}
            py={4}
            fontWeight="light"
            mt={3}
            textAlign="justify"
          >
            {shortbio}
          </Bio>
        ) : null}
      </Testimonial>
    </ContentContainer>
  );
};
