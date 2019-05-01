const express = require('express');
const router = express.Router();
const sendmail  = require('../middleware/sendmail');

router.post('/sendmail', sendmail.sendmail);

module.exports = router;