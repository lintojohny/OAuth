const HttpStatus = require('http-status-codes');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .send({
      date: new Date(),
      version: '0.0.0',
      microService: 'Health is ok',
    })
    .status(HttpStatus.OK)
    .end();
});

module.exports = router;
