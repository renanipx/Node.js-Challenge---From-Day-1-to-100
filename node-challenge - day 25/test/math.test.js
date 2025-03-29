import { expect } from 'chai';  // Correctly import expect from chai
import chaiHttp from 'chai-http';  // Import chai-http correctly
import { app } from '../src/app.js';  // Import the app to test

// Use chaiHttp as a plugin for chai
chai.use(chaiHttp);

describe('Math API Tests', () => {
  it('should return the sum of two numbers', async () => {
    const res = await chai.request(app).post('/math/add').send({ a: 5, b: 3 });
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('result', 8);  // Check if the result is correct
  });

  it('should return an error if values are not numbers', async () => {
    const res = await chai.request(app).post('/math/add').send({ a: 'x', b: 3 });
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');  // Check if the error message is returned
  });
});
