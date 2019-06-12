/**
 * Firebase Real-Time Database client data provider
 * See: https://github.com/Canner/apollo-link-firebase#quickstart
 */
// eslint-disable-next-line
import React, { Component } from "react";
import firebase from "./config";
import { useFirebaseDatabase } from "./connectorSuspenseHook";

export function SubmitNewsletterForm(payload) {
  const dataRef = firebase.database().ref(`newsletter`);
  const newKey = dataRef.push().key;
  const finalPayload = {
    ...payload,
    created: firebase.database.ServerValue.TIMESTAMP,
  };

  return dataRef.update({
    [newKey]: finalPayload,
  });
}

export function SubmitContactForm(payload) {
  const dataRef = firebase.database().ref(`contactForm`);
  const newKey = dataRef.push().key;
  const finalPayload = {
    ...payload,
    created: firebase.database.ServerValue.TIMESTAMP,
  };

  return dataRef.update({
    [newKey]: finalPayload,
  });
}

/**
 * Suspense enabled provider for a single key
 * @param path string
 */
export function SheetsyncElement({ path }) {
  const dataRef = firebase.database().ref(`sheetsync/${path}`);
  const dataState = useFirebaseDatabase(dataRef);

  return dataState.unstable_read();
}

/**
 * Suspense enabled provider for a single key
 * @param path string
 */
export function SheetsyncListElement({ path, children }) {
  const dataRef = firebase.database().ref(`sheetsync/${path}`);
  const dataState = useFirebaseDatabase(dataRef);

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
