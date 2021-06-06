const {OK} = require('http-status-codes');

const {success} = require('../../helpers/response');
const {LANGUAGE_KEYS} = require('../../helpers/constants');

async function getHome(req, res) {
  success(req, res, OK, {}, 'Home page Loading');
}
async function loginFailed(req, res) {
  success(req, res, OK, {}, 'Login Failed');
}
async function profile(req, res) {
  success(req, res, OK, {}, `Welcome Mr ${req.user.displayName}!`);
}
async function logout(req, res) {
  req.session = null;
  req.logout();
  res.redirect('/home');
}
module.exports = {getHome, loginFailed, profile, logout};
