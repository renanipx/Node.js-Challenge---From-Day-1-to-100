import { gql } from 'graphql-request';

export const CountriesQuery = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;
