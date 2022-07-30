const express = require('express');
const router = express.Router();

const checkToken = require("../middleware/auth");
const userCtrl = require('../controller/user');

router.get('/', checkToken, userCtrl.getAll);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/', checkToken, userCtrl.updateUser);


module.exports = router;