import React from "react";
import { storiesOf } from "@storybook/react";

import SideText from "./index";

storiesOf("SideText", module).add("Simple", () => (
  <SideText>Title text</SideText>
));
