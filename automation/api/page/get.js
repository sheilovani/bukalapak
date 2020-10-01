const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.TEST_URL);

const get = (userId, id, title, string) => api.get('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query(userId, id, title, string)

module.exports = {
   get,
}