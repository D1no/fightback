import React from "react";
import { storiesOf } from "@storybook/react";

import AngledContainer from "./index";

storiesOf("V2/AngledContainer", module)
  .add("Simple", () => <AngledContainer>AngledContainer</AngledContainer>)
  .add("Mirrored", () => (
    <AngledContainer mirror background="yellow">
      AngledContainer Mirrored yellow
    </AngledContainer>
  ))
  .add("One direction", () => (
    <div>
      <AngledContainer right background="purple">
        AngledContainer Right purple
      </AngledContainer>
      <AngledContainer left background="green">
        AngledContainer Left green
      </AngledContainer>
    </div>
  ))
  .add("One side", () => (
    <div>
      <AngledContainer background="dark" top>
        AngledContainer Top dark
      </AngledContainer>
      <div>space</div>
      <AngledContainer background="green" bottom right>
        AngledContainer bottom green
      </AngledContainer>
    </div>
  ));
