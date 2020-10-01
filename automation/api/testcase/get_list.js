/* eslint-env mocha */
/* eslint prefer-destructuring: off */
/* eslint no-unused-expressions: off */

const { expect } = require('chai');
const chai = require('chai');
const mocha = require('mocha');

const responseMessageCode = require('../helper/response_message.json');
const page = require('../page/get.js');


const testCase = {
 "positive" : {
    "getList" : "As a User, I want to be able to get jsonplaceholder list",
 }
}

describe(`Get jsonplaceholder List`, () => {
 it(`@get ${testCase.positive.getList}`, async() => {
  const response = await page.get();
  console.log(response);
  expect(response.status).to.equal(responseMessageCode.successOk);
 })
});