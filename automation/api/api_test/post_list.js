/* eslint-env mocha */
/* eslint prefer-destructuring: off */
/* eslint no-unused-expressions: off */

const { expect } = require('chai');
const chai = require('chai');
const mocha = require('mocha');

const responseMessageCode = require('../helper/response_message.json');
const page = require('../page/post.js');
const body = require('./../helper/data.json');


const testCase = {
 "positive" : {
    "postToTheList" : "As a User, I want to be able to add post to jsonplaceholder list",
 }
}

describe(`Post to jsonplaceholder List`, () => {
 it(`@post ${testCase.positive.postToTheList}`, async() => {
  const response = await page.post(body);
  expect(response.status).to.equal(responseMessageCode.successCreated);
 })
});