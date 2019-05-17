import React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownText from "./index";

storiesOf("MarkdownText", module).add("Simple", () => (
  <MarkdownText
    source={`
Paragraph\n
Paragraph  
break Text
  `}
  />
));
