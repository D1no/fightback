import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "./index";

storiesOf("Title", module).add("Simple", () => <Title>Title text</Title>);
