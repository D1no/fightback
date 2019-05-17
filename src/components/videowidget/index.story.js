import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import VideoWidget from "./index";

storiesOf("Video Widget", module).add("Responsive Preview", () => {
  const videoProps = {
    videoLink: "https://www.youtube.com/watch?v=iuG5lgNDjbk",
    videoSrc: "/media/co-creation-2018-teaser-no-sound.01.mp4",
    text: "Impressions from October 2018",
  };

  return <VideoWidget debug={boolean("Debug View", true)} {...videoProps} />;
});
