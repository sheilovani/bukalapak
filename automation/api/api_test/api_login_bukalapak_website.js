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
var formData = new FormData();
formData.append('user_session[username]', 'sheilayovani@gmail.com');
formData.append('user_session[password]', 'sheila123');
formData.append('user_session[remember_me]', 1);
formData.append('identity', '5c32b16f1eed851a3a4789b5e7c022b7');
formData.append('authenticity_token', 'Uq5RT8Jqit/0cQbx+czlqmzMeaHA5QB1FsHEsAoXVszsITX6+CuGA+I+vlZihGps3eJO7UR8xbNKhUXQBEDXlw==');
formData.append('comeback', 'https://www.bukalapak.com/?from=https://www.bukalapak.com/&from=https://www.bukalapak.com/?from=https://www.bukalapak.com/&from=https://www.bukalapak.com/?from=https://www.bukalapak.com/&flash=you_login&flash=you_login')


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
        const response = await page.postLogin(formData);
        expect(response.status).to.equal(responseMessageCode.successOk);
    });
});
