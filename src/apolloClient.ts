import {
  InMemoryCache,
  HttpLink,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "/api/graphql",
      credentials: "same-origin",
    }),
  });
};

const initializeApollo = () => {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
};

export function useApollo() {
  return initializeApollo();
}
