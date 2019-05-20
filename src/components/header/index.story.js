import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import Header from "./index";

storiesOf("Header", module).add("Title Overwrite", () => (
  <Header debug={boolean("Debug View", true)} />
));
