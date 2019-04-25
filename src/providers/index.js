import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";

/**
 * Clients to be used as data providers.
 */
import coinbase from "./coinbase";

const Provider = props => (
  <ApolloProvider client={{ coinbase }}>
    <ApolloProviderHooks client={coinbase}>
      {props.children}
    </ApolloProviderHooks>
  </ApolloProvider>
);

export default Provider;
