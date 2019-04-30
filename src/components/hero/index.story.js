import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import Hero from "./index";
import Wrapper from "components/wrapper";
import Header from "components/header";

storiesOf("Hero", module)
  .add("Show Sections", () => (
    <Wrapper>
      <Hero
        debug={boolean("Debug View", true)}
        top={text(
          "Top",
          "This is the Header Area of the Hero (at the bottom)!"
        )}
        middleStretch={text(
          "Middle Content",
          "This is the Content Area of the Hero that is centered and stretches vertically if necessary!"
        )}
      >
        <div>
          {text(
            "Text Content",
            "This is the Content Area of the Hero (at the bottom)!"
          )}
        </div>
      </Hero>
      This is text below the fold. You should see it as soon you scroll down.
      You should see it as soon you scroll down. You should see it as soon you
      scroll down. You should see it as soon you scroll down. You should see it
      as soon you scroll down. You should see it as soon you scroll down. You
      should see it as soon you scroll down. You should see it as soon you
      scroll down. You should see it as soon you scroll down. You should see it
      as soon you scroll down. You should see it as soon you scroll down. You
      should see it as soon you scroll down.
    </Wrapper>
  ))
  .add("With Header", () => (
    <Wrapper>
      <Hero
        debug={boolean("Debug View", false)}
        top={<Header />}
        middleStretch={text(
          "Middle Content",
          "This is the Content Area of the Hero that is centered and stretches vertically if necessary!"
        )}
      >
        <div>
          {text(
            "Text Content",
            "This is the Content Area of the Hero (at the bottom)!"
          )}
        </div>
      </Hero>
      This is text below the fold. You should see it as soon you scroll down.
      You should see it as soon you scroll down. You should see it as soon you
      scroll down. You should see it as soon you scroll down. You should see it
      as soon you scroll down. You should see it as soon you scroll down. You
      should see it as soon you scroll down. You should see it as soon you
      scroll down. You should see it as soon you scroll down. You should see it
      as soon you scroll down. You should see it as soon you scroll down. You
      should see it as soon you scroll down.
    </Wrapper>
  ));
