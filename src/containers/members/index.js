/**
 * Main page of the app
 */
import React, { Suspense } from "react";
import { Box } from "rebass";
import staticData from "containers/static-data";

import Page from "components/v2/page";
import Wrapper from "components/v2/wrapper";
import Header from "components/v2/header";
import AngledContainer from "components/v2/angledContainer";

import MembersHero from "./members-hero";

function Members() {
  return (
    <Page>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Wrapper>
          <Header />
          <MembersHero
            headerText={staticData.members.headerText}
            description={staticData.members.description}
            features={staticData.members.features}
          />
        </Wrapper>
        <AngledContainer background={"grey"}>
          <Wrapper>Text</Wrapper>
        </AngledContainer>
        <AngledContainer background={"dark"} top mirror>
          <Wrapper pt={9} pb={7}>
            Footer
          </Wrapper>
        </AngledContainer>
      </Suspense>
    </Page>
  );
}

export default Members;
