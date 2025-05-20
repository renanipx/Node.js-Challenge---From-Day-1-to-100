const { fetchHello } = require('../client');

describe('GraphQL Query', () => {
  test('fetches hello', async () => {
    const result = await fetchHello();
    expect(result).toBe('Hello, GraphQL!');
  });
});
