/**
 * Firebase Real-Time Database client data provider
 * See: https://github.com/Canner/apollo-link-firebase#quickstart
 */
// eslint-disable-next-line
import React, { Component } from "react";
import fiery from "fiery";
// Firebase modular import for tree shaking
import firebase from "firebase/app";
import "firebase/database";

import config from "./config";

// Initialise Firebase Connection
export default firebase.initializeApp(config);

/**
 * Suspense enabled provider for a single key
 * @param path string
 */
export function SheetsyncElement({ path }) {
  const dataRef = firebase.database().ref(`sheetsync/${path}`);
  const dataState = fiery.useFirebaseDatabase(dataRef);

  return dataState.unstable_read();
}

/**
 * Suspense enabled provider for a single key
 * @param path string
 */
export function SheetsyncListElement({ path, children }) {
  const dataRef = firebase.database().ref(`sheetsync/${path}`);
  const dataState = fiery.useFirebaseDatabase(dataRef);

  return children({ items: dataState.unstable_read() });
}

/**
 * Error boundary, showing fallback component if error is cached + logging.
 * @param path string
 * @param fallbackError react component
 */
export class SheetsyncError extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.error(`SheetSync Path: ${this.props.path}`, error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallbackError;
    }

    return this.props.children;
  }
}
