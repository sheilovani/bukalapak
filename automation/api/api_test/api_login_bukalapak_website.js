/* eslint-env mocha */
/* eslint prefer-destructuring: off */
/* eslint no-unused-expressions: off */

const { expect } = require('chai');
const chai = require('chai');
const mocha = require('mocha');

const responseMessageCode = require('./../helper/response_message.json');
const userCredential = require('./../helper/userCredential.js');
const page = require('./../page/login.js');

let tokenSheila;

const testCase = {
    "positive" : {
        "successLogin" : "User can login by email account and password",
        "successLoginFB" : "User can login by Facebook account and password",
        "successLoginGoogle" : "User can login by Google account and password",
    },
    "negative" :{
        "failedLoginIfInvalidToken" : "User will get error when token is invalid",
        "failedLoginWithoutCredential" : " User will get error when token is blank",
    }
}

describe(`Login user Bukalapak with email and password`, () => {
    it(`@post ${testCase.positive.successLogin}`, async () => {
        const response = await page.postLogin(userCredential);
        expect(response.status).to.equal(responseMessageCode.successOk);
    });
});
