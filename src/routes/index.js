const express = require('express');

const router = express.Router();
const healthRouter = require('./health');

const OAuth = require('./OAuth');

router.use('/health', healthRouter);

router.use('/home', OAuth);

module.exports = router;
