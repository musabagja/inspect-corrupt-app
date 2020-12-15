import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const reportData1 = makeVar({
  case: "",
  entity: "",
  province: "",
  city: ""
})

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export default client