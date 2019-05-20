import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "./index";

storiesOf("Footer", module).add("Simple", () => (
  <Footer aside="aside" title="title">
    Content
  </Footer>
));
