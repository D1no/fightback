/**
 * Main page of the app
 */
import React, { Suspense, useState } from "react";
import { Box } from "rebass";
import ReactMarkdown from "react-markdown";

import Layout from "components/layout";
import Header from "components/header";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import { SheetsyncLine, SheetsyncList } from "providers/firebase/sheetsync";

let HIDE_IN_PROD = true;
if (process.env.NODE_ENV === "development") {
  HIDE_IN_PROD = false;
}

function Home(props) {
  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <Wrapper>
        <Hero
          top={<Header hideMenu={HIDE_IN_PROD} />}
          middleStretch={
            <>
              <SheetsyncLine path={"static/event/time"} />
              <SheetsyncLine path={"static/event/date"} />
            </>
          }
        >
          <SheetsyncLine path={"static/event/summary"} />
        </Hero>
        <SheetsyncLine path={"static/about/title"} />
        <SheetsyncLine path={"static/about/markdown"} />
        <SheetsyncLine path={"static/about/author"} />
        <SheetsyncList path={"sessions"}>
          {({ item, index }) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <ReactMarkdown source={item.markdown} />
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
