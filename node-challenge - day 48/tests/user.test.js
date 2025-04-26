const request = require('supertest');
const app = require('../app');
require('dotenv').config();

describe('User API Integration Tests', () => {
  it('GET /api/users should return a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.users).toContain('Alice');
  });

  it('POST /api/users should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Charlie' });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User Charlie created');
  });

  it('POST /api/users without name should return 400', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe('Name is required');
  });
});
