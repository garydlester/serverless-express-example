const express = require('serverless-express/express');
const plstController = require('../controllers/plstController');

const router = express.Router()

router.route('/')
      .get(
        plstController.getPLSTAssets
      )

module.exports = router;
