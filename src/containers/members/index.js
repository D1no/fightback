/**
 * Main page of the app
 */
import React, { Suspense } from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";
import staticData from "containers/static-data";

import Page from "components/v2/page";
import Wrapper from "components/v2/wrapper";
import Header from "components/v2/header";
import Footer from "components/v2/footer";

import MembersHero from "./members-hero";
import ContactUs from "./contact-us";
import Community from "./community";
import Partners from "./partners";

const PartnersTitle = styled(Text)``;

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
        <Community
          title={staticData.members.communityTitle}
          description={staticData.members.communityDescription}
          people={staticData.members.communityPeople}
        />
        <Wrapper>
          <PartnersTitle
            fontSize={3}
            fontWeight="bold"
            color="accent"
            mx="auto"
            width={300}
            textAlign="center"
            mb={6}
          >
            A SAMPLE OF THE COMPANIES REPRESENTED IN OUR MEMBERSHIP:
          </PartnersTitle>
          <Partners mb={[8, 8, 11]} px={[0, 7]} />
          <ContactUs
            headerText={staticData.members.contactUsTitle}
            description={staticData.members.contactUsText}
          />
        </Wrapper>
        <Footer />
      </Suspense>
    </Page>
  );
}

export default Members;
