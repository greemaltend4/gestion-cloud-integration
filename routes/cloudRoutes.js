const express = require('express');
const router = express.Router();
const cloudController = require('../controllers/cloudController');

router.post('/connect', cloudController.connectService);
router.post('/automate', cloudController.automateWorkflow);

module.exports = router;
