'use strict';
let router = require('express').Router();
let authCtrl = require('../controllers/auth.controller');
let permissions = require('./permissions');

router.post('/registration', authCtrl.register);
router.post('/login', authCtrl.login);

router.use(permissions.ensureAuthorized);

router.get('/me', authCtrl.getMe);

module.exports = router;