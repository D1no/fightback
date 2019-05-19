import React from "react";
import { storiesOf } from "@storybook/react";
import MarkdownText from "components/markdownText";

import SideText from "./index";

storiesOf("SideText", module)
  .add("Simple", () => <SideText>Title text</SideText>)
  .add("SideText with markdown", () => (
    <SideText>
      <MarkdownText
        source={`
Paragraph\n
Paragraph  
break Text **bold**
  `}
      />
    </SideText>
  ));
