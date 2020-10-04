const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.TEST_URL);

const post = (body) => api.post('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .send(body);

module.exports = {
   post,
}