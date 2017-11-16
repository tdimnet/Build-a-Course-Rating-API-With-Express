'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json(({
    response: 'You sent me a GET request to "users" endpoint.'
  }))
});

// Exporting the router
module.exports = router;
