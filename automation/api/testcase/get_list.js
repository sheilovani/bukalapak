/* eslint-env mocha */
/* eslint prefer-destructuring: off */
/* eslint no-unused-expressions: off */

const { expect } = require('chai');
const chai = require('chai');
const mocha = require('mocha');
chai.use(require('chai-json-schema'));

const responseMessageCode = require('./../helper/response_message.json');
const page = require('./../page/get.js');
const jsonSchema = require('./../helper/schema.json');


const testCase = {
 "positive" : {
    "getList" : "As a User, I want to be able to get jsonplaceholder list",
    "dataTypeValidation" : "As a User, I should be able to verify the list has correct data type"
 }
}

describe(`Get jsonplaceholder List`, () => {
 it(`@get ${testCase.positive.getList}`, async() => {
      const response = await page.get();
      expect(response.status).to.equal(responseMessageCode.successOk);
   })
});

describe(`Get jsonplaceholder List`, () => {
   it(`@get ${testCase.positive.dataTypeValidation}`, async() => {
      const response = await page.get();
      expect(response.status).to.equal(responseMessageCode.successOk, JSON.stringify(response.body));
      expect(response.body).to.be.jsonSchema(jsonSchema.items, JSON.stringify(response.body));
   })
});