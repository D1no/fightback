import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import VideoWidget from "./index";

storiesOf("Video Widget", module).add("Responsive Preview", () => (
  <VideoWidget debug={boolean("Debug View", true)} />
));
