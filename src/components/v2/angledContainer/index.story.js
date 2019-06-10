import React from "react";
import { storiesOf } from "@storybook/react";

import AngledContainer from "./index";

storiesOf("V2/AngledContainer", module)
  .add("Simple", () => <AngledContainer>AngledContainer</AngledContainer>)
  .add("Mirrored", () => (
    <AngledContainer mirror background="red">
      AngledContainer Mirrored Red
    </AngledContainer>
  ))
  .add("One direction", () => (
    <div>
      <AngledContainer right background="red">
        AngledContainer Right Red
      </AngledContainer>
      <AngledContainer left background="blue">
        AngledContainer Left Blue
      </AngledContainer>
    </div>
  ))
  .add("One side", () => (
    <div>
      <AngledContainer background="red" top>
        AngledContainer Top Red
      </AngledContainer>
      <div>space</div>
      <AngledContainer background="blue" bottom right>
        AngledContainer bottom Blue
      </AngledContainer>
    </div>
  ));
