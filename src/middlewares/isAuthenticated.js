const {UNAUTHORIZED} = require('http-status-codes');

const {ErrorHandler} = require('../errorHandlers');

module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    throw new ErrorHandler(
      UNAUTHORIZED,
      'Not Authorised to perform the action',
    );
  }
};
