import React from "react";
import { Box } from "rebass";
import { storiesOf } from "@storybook/react";

import ContentContainer from "./index";

storiesOf("ContentContainer", module).add("Simple", () => (
  <ContentContainer containerTitle="title" aside={<Box>Aside</Box>}>
    This is text below the fold. You should see it as soon you scroll down. You
    should see it as soon you scroll down. You should see it as soon you scroll
    down. You should see it as soon you scroll down. You should see it as soon
    you scroll down. You should see it as soon you scroll down. You should see
    it as soon you scroll down. You should see it as soon you scroll down. You
    should see it as soon you scroll down. You should see it as soon you scroll
    down. You should see it as soon you scroll down. You should see it as soon
    you scroll down.
  </ContentContainer>
));
