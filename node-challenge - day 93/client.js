const { ApolloClient, InMemoryCache, gql, HttpLink } = require('@apollo/client/core');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/', fetch }),
  cache: new InMemoryCache(),
});

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

const fetchHello = async () => {
  const { data } = await client.query({ query: GET_HELLO });
  return data.hello;
};

module.exports = { fetchHello };
