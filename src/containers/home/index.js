/**
 * Main page of the app
 */
import React, { Suspense, useState } from "react";
import { Box } from "rebass";
import ReactMarkdown from "react-markdown";

import Layout from "components/layout";
import Header from "components/header";
import HeadSelect from "components/headSelect";
import { SheetsyncLine, SheetsyncList } from "providers/firebase/sheetsync";

import styled from "styled-components/macro";

const ContentWrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

function Home(props) {
  // eslint-disable-next-line
  const [baseCurrency, setBaseCurrency] = useState("EUR");

  return (
    <ContentWrapper mx="auto" p={[0]}>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Layout
          debug={false}
          sectionHeader={
            <Header title={<SheetsyncLine path={"static/about/title"} />} />
          }
          sectionTopControl={<HeadSelect />}
        >
          <SheetsyncLine path={"static/about/title"} />
          <SheetsyncList path={"sessions"}>
            {({ item, index }) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <ReactMarkdown source={item.markdown} />
              </div>
            )}
          </SheetsyncList>
        </Layout>
      </Suspense>
    </ContentWrapper>
  );
}

export default Home;
