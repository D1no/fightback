/**
 * Main page of the app
 */
import React, { Suspense } from "react";
import styled from "styled-components/macro";
import { Link, Text, Box } from "rebass";

import Header from "components/header";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import ContentContainer from "components/contentContainer";
import Title from "components/title";
import SideText from "components/sideText";
import MarkdownText from "components/markdownText";
import Signature from "components/signature";
import { SheetsyncLine, SheetsyncList } from "providers/firebase/sheetsync";

let HIDE_IN_PROD = true;
if (process.env.NODE_ENV === "development") {
  HIDE_IN_PROD = false;
}

const ParallaxPlaceholder = styled(Box)`
  height: 400px;
  background-image: ${props => props.theme.gradients.lightBlue};
`;

function Home(props) {
  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <Wrapper>
        <Hero
          top={<Header hideMenu={HIDE_IN_PROD} />}
          middleStretch={[
            <>
              <SheetsyncLine path={"static/event/time"} />
              <SheetsyncLine path={"static/event/date"} />
            </>,
            <>
              <Text fontWeight="bold">attendance o. nomination</Text>
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
      <ParallaxPlaceholder my={10} />
      <Wrapper>
        <ContentContainer
          title="about"
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
        <SheetsyncList path={"sessions"}>
          {({ item, index }) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <MarkdownText source={item.markdown} />
            </div>
          )}
        </SheetsyncList>
        <SheetsyncLine path={"static/footer/copyright"} />
        <SheetsyncLine path={"static/event/email"} />
      </Wrapper>
    </Suspense>
  );
}

export default Home;
