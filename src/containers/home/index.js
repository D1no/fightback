/**
 * Main page of the app
 */
import React, { Suspense } from "react";
import styled from "styled-components/macro";
import { Link, Text, Box, Flex } from "rebass";

import staticData from "containers/static-data";

import Page from "components/page";
import Header from "components/header";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import ContentContainer from "components/contentContainer";
import Title from "components/title";
import SideText from "components/sideText";
import NoteText from "components/noteText";
import MarkdownText from "components/markdownText";
import Signature from "components/signature";
import ExpectSection from "./expect-section";
import AttendeePhotoGrid from "./attendee-photo-grid";
import Partners from "./partners";
import Footer from "containers/footer";
import { SheetsyncLine, SheetsyncList } from "providers/firebase/sheetsync";

let HIDE_IN_PROD = true;
if (process.env.NODE_ENV === "development") {
  HIDE_IN_PROD = false;
}

const ParallaxPlaceholder = styled(Box)`
  height: 400px;
  background-image: ${props => props.theme.gradients.lightBlue};
`;

function Home() {
  return (
    <Page>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Wrapper>
          <Hero
            top={<Header hideMenu={HIDE_IN_PROD} />}
            middleStretch={[
              <>
                <SheetsyncLine path={"static/event/time"} />
                <SheetsyncLine path={"static/event/date"} />
              </>,
              <>
                <Text fontWeight="bold">contact & enquiries</Text>
                <SheetsyncLine path={"static/event/email"}>
                  {({ data }) => {
                    return <Link href={`mailto:${data}`}>{data}</Link>;
                  }}
                </SheetsyncLine>
              </>,
            ]}
          >
            <SheetsyncLine path={"static/event/summary"} />
          </Hero>
        </Wrapper>
        {!HIDE_IN_PROD && <ParallaxPlaceholder my={9} />}
        <Wrapper>
          <ContentContainer
            containerTitle="about"
            id="about"
            aside={
              <SheetsyncLine path={"static/about/panelmarkdown"}>
                {({ data }) => (
                  <SideText>
                    <MarkdownText source={data} />
                  </SideText>
                )}
              </SheetsyncLine>
            }
          >
            <Title>
              <SheetsyncLine path={"static/about/title"} />
            </Title>
            <Box ml={[0, 6]}>
              <SheetsyncLine path={"static/about/markdown"}>
                {({ data }) => (
                  <Text fontWeight="light">
                    <MarkdownText source={data} />
                  </Text>
                )}
              </SheetsyncLine>
              <Signature width="180px" height="73px" mx={"auto"} my={7} />
              <SheetsyncLine path={"static/about/author"}>
                {({ data }) => (
                  <Text fontWeight="light">
                    <MarkdownText source={data} />
                  </Text>
                )}
              </SheetsyncLine>
            </Box>
          </ContentContainer>
          <ContentContainer
            containerTitle="attendance"
            id="attendance"
            aside={
              <SheetsyncLine path={"static/attendance/panelmarkdown"}>
                {({ data }) => (
                  <SideText>
                    <MarkdownText source={data} />
                  </SideText>
                )}
              </SheetsyncLine>
            }
          >
            <Flex flexWrap="wrap">
              <SheetsyncList path={"static/attendance"}>
                {({ item, index }) => {
                  const { title, markdown } = item;

                  if (!(title, markdown)) {
                    return null;
                  }

                  return (
                    <Box key={index} width={[12 / 12, 6 / 12]} mb={5}>
                      <Title>{title}</Title>
                      <Box ml={[0, 6]}>
                        <Text fontWeight="light">
                          <MarkdownText source={markdown} />
                        </Text>
                      </Box>
                    </Box>
                  );
                }}
              </SheetsyncList>
            </Flex>
          </ContentContainer>
        </Wrapper>
        {!HIDE_IN_PROD && <ParallaxPlaceholder my={9} />}
        <Wrapper>
          <ContentContainer
            containerTitle="agenda // sessions"
            id="agenda"
            aside={
              <SheetsyncLine path={"static/agenda/panelmarkdown"}>
                {({ data }) => (
                  <SideText>
                    <MarkdownText source={data} />
                  </SideText>
                )}
              </SheetsyncLine>
            }
            header={
              <SheetsyncLine path={"static/agenda/warning"}>
                {({ data }) => <NoteText mb={5}>{data}</NoteText>}
              </SheetsyncLine>
            }
          >
            <SheetsyncList path={"sessions"}>
              {({ item, index }) => (
                <Box key={index} mb={4}>
                  <Title>{item.title}</Title>
                  <Box ml={[0, 6]}>
                    <Text fontWeight="light">
                      <MarkdownText source={item.markdown} />
                    </Text>
                  </Box>
                </Box>
              )}
            </SheetsyncList>
          </ContentContainer>
        </Wrapper>
        {!HIDE_IN_PROD && <ParallaxPlaceholder my={9} />}
        <Wrapper>
          <ExpectSection data={staticData.expect} />
          <AttendeePhotoGrid attendeesList={staticData.expect.attendeesGrid} />
          <Partners pb={9} px={[0, 4]} />
          <Footer />
        </Wrapper>
      </Suspense>
    </Page>
  );
}

export default Home;
