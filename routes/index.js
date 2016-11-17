'use strict';
let router = require('express').Router();
let authRoutes = require('./auth.routes');

router.use('/auth', authRoutes);

module.exports = router;