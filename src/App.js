import React, { Component } from "react";

import Theme from "containers/theme";
import Provider from "providers";
import Home from "containers/home";

let delay = 1500;

if (process.env.NODE_ENV === "development") {
  delay = 0;
}

class App extends Component {
  render() {
    return (
      <Provider>
        <Theme>
          <Home />
        </Theme>
      </Provider>
    );
  }

  // ToDo This needs to come from suspense. Using this: https://codesandbox.io/s/6l65nq9k3n
  loadingpromise() {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  componentDidMount() {
    this.loadingpromise().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }
}

export default App;
