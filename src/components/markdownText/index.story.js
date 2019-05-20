import React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownText from "./index";

storiesOf("MarkdownText", module).add("Simple", () => (
  <MarkdownText
    source={`Two rounds of facilitated groups will run in parallel; each with industry experts.\n\n14:00 **Arrival**\n 14:30 **Welcome & Warm up**\n\n15:00 **Impact Discussions (Round 1/2)**\n 16:30 **Break**\n\n17:00 **Impact Discussions (Round 2/2) **\n18:30 **Break**\n\n19:15 **Last words **\n19:30 **Dinner & Live Music**\n\n23:00 **Open End**`}
  />
));
