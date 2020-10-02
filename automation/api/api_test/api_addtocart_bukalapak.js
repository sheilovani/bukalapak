/* eslint-env mocha */
/* eslint prefer-destructuring: off */
/* eslint no-unused-expressions: off */

const { expect } = require('chai');
const chai = require('chai');
const mocha = require('mocha');

const responseMessageCode = require('./../helper/response_message.json');
const page = require('./../page/login.js');
const dataquery = require('./../helper/test_data_addtocart.js')
const common = require('./../helper/common.js')

let tokenSheila;
const testCase = {
    "positive" : {
        "successAddToCart" : "User can add item to cart successfully",
    }
}

describe(`Add To Cart`, () => {
    before(async () => {
        const response = await common.getTokenUserBukalapak();
        tokenSheila = response.body.token;
        const paramquery = dataquery.paramqueryAddToCart();
    });

    it(`@post ${testCase.positive.successAddToCart}`, async() => {
     const response = await page.postLogin(dataquery.payloadAddToCart);
     expect(response.status).to.equal(responseMessageCode.successOk);
    })
});