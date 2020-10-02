const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BUKALAPAK_URL);

const postLogin = body => api
    .post('/user_sessions')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(body);

module.exports = {
    postLogin,
}