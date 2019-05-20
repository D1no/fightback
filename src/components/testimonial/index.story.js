import React from "react";
import { storiesOf } from "@storybook/react";

import Testimonial from "./index";

storiesOf("Testimonial", module).add("Simple", () => (
  <Testimonial
    name="Markus Fuhrmann"
    position="Co-Founder Delivery Hero, BITKRAFT"
    testimonial={`“Great choice of people and a trustworthy atmosphere.`}
    text={`The event format focuses on enhancing the interaction amongst guests, which ensures many valuable connections and take-aways."`}
    image="/media/holger-ewald.jpg"
  />
));
