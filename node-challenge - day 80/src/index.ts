import { request } from 'graphql-request';
import { CountriesQuery } from './graphql/countries.query';
import { CountriesQuery as CountriesQueryType } from './generated/graphql';

const endpoint = 'https://countries.trevorblades.com/';

async function fetchCountries() {
  const data = await request<CountriesQueryType>(endpoint, CountriesQuery);
  console.log(data);
}

fetchCountries();
