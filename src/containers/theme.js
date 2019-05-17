import React from "react";
import { themeGet, style } from "styled-system";
/**
 * Macro needed to support the css property without ejecting CRA.
 * Note: Link & Details https://www.styled-components.com/docs/tooling#babel-macro
 */
import { ThemeProvider, createGlobalStyle, css } from "styled-components/macro";

/**
 * Configuration for Design System Choices
 * Note: Overwrites styled-system defaults incl. responsive properties
 * Link: https://github.com/jxnblk/styled-system/blob/master/docs/table.md
 */
// prettier-ignore
const lightTheme = {
  maxWidth: "1110px",
  breakpoints: [
    "48em", // 01 - iPad portrait and up
    "85em", // 02 - most popular desktop and up
    "118.75em", // 03 - full hd and up
  ],
  lineHeights: [
    '11px', // 00
    '16px', // 01
    '18px', // 02
    '21px', // 03
    '24px', // 04
    '32px', // 05
    '42px', // 06
  ],
  fontSizes: [
    8,   // 00
    12,  // 01
    14,  // 02
    16,  // 03
    18,  // 04
    24,  // 05
    32,  // 06
    48,  // 07
    58,  // 08
  ],
  colors: {
    // Main
    black: "#0D121A",
    light: "#C2C3C6",
    white: "#fff",
    // Variations
    gray: "#F6F4F7",
    darkgray: "#86878C",
    red: "#F54949",
    loading: "#f7f7f7",
    loadingFail: "#ffc5c9",
    blue: "#1D7DEA"
  },
  space: [
    0,   // 00
    3,   // 01
    5,   // 02
    10,   // 03
    15,  // 04
    20,  // 05
    25,  // 06
    30,  // 07
    35,  // 08
    40,  // 09
    80,  // 10
    90,  // 11
    120, // 12
    250 // 13
  ],
  heights: {
    dropbox: 40
  },
  fontWeights: {
    get main() { return this.regular },
    // Variations
    thin: 100,
    light: 300,
    regular: "normal",
    medium: 500,
    bold: "bold",
  },
  fonts: {
    accent: '"Adelon","Helvetica Neue",sans-serif',
    prominent: '"Red Ring","Helvetica Neue",sans-serif',
    main: '"Uniform Rounded","Helvetica Neue",sans-serif',
  },
  shadows: {
    card: "0 0 8px 0 rgba(13,18,26,0.19)",
    small: "0 0 4px 0 rgba(13,18,26,0.19)",
    large: "0 0 24px 0 rgba(13,18,26,0.19)",
  },
  gradients: {
    lightBlue: "linear-gradient(135deg, #35a8fb 0%, #227af0 100%)"
  }
};

// aliases
lightTheme.breakpoints.md = lightTheme.breakpoints[0];
lightTheme.breakpoints.xl = lightTheme.breakpoints[1];
lightTheme.breakpoints.xxl = lightTheme.breakpoints[2];

/**=============================================================================

 Helpers for Styling Components with styled()

 =============================================================================**/

/**
 * A custom render prop for responsively hiding sections
 * according to theme breakpoints.
 * Note: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#style
 * Note2: Conditional render is better for performance but more complex.
 *
 * Add like this:
   const YourElement = styled(Box)`
    ${responsiveDisplayProp}
   `;
 *
 * Use like this (hidden mobile, shown up):
 *
   <YourElement
     display={[false, true]}
   />
 */
const responsiveDisplayProp = style({
  prop: "display",
  cssProperty: "display",
  transformValue: bol => (!bol ? "none" : "inherit"),
});

/**
 * When true, adds a random background to the object for easier identification.
 * @param debug
 * @returns {*}
 *
 * Add like this:
   const YourElement = styled(Box)`
    ${props => debuggableViewProp(props)}
   `;
 *
 * Use like this:
 *
   <YourElement debug />
 */
function debuggableViewProp({ debug }) {
  return (
    debug &&
    css`
      background-color: rgb(
        ${Math.random() * 255},
        ${Math.random() * 100 + 150},
        ${Math.random() * 100 + 150}
      );
    `
  );
}

export { lightTheme, responsiveDisplayProp, debuggableViewProp };

/**=============================================================================

   Theme Container that wraps all components.

 =============================================================================**/

/**
 * Page Styles
 * Note: Place for index.css content / replacement
 */
const GlobalPageStyle = createGlobalStyle`
  body {
    font-family: ${themeGet("fonts.main")};
    font-weight: ${themeGet("fontWeights.main")};
    line-height: 1.5; // 27px
    font-size: 18px;
    color: ${themeGet("colors.black")};
  }
  
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

/**
 * Global Reset (will be loaded first). Using normalize.css
 */
const GlobalResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root {
    overflow: hidden;
    width: 100%;
  }
  
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */
  
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  /**
   * Render the \`main\` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }
`;

/**
 * Theme Container for <App />
 */
export default props => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalResetStyle />
      <GlobalPageStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export { GlobalResetStyle, GlobalPageStyle };
