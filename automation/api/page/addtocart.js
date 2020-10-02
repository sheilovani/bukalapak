const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BUKALAPAK);

const postAddToCart = (token, body) => api.post('/carts/items')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .set('Authorization', token)
 .send(body);

module.exports = {
    postAddToCart,
}