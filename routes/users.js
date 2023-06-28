const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users_controller');

router.get('/profile', users_controller.profile);
router.get('/profilemain', users_controller.profilemain);

module.exports = router;