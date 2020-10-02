const login = require('./../page/login.js');
const loginAccount = require('./userCredential.js');

function getTokenUserBukalapak() {
  return login.postLogin(loginAccount.userBukalapak);
}

module.exports = {
    getTokenUserBukalapak,
}