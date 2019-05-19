import React from "react";
import { storiesOf } from "@storybook/react";

import NoteText from "./index";

storiesOf("NoteText", module).add("Simple", () => (
  <NoteText>Note Text</NoteText>
));
