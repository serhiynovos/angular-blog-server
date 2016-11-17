'use strict';
let User = require('../models/user.model');

module.exports.register = (req, res, next) => {
    User
        .createUser(req.body.email, req.body.password)
        .then(
            createdUser => res.status(201).json({
                error: false,
                message: 'User has been successfily created'
            }),

            err => res.status(500).json({
                error: true,
                message: err
            })
        );
};

module.exports.login = (req, res, next) => {
    User
        .login(req.body.email, req.body.password)
        .then(
            token => {
                if (!token) {
                    return res.status(404).json({
                        error: true,
                        message: 'Incorect data'
                    });
                }

                return res.status(200).json({
                    error: false,
                    token: token
                });
            },

            err => res.status(500).json({
                error: true,
                message: err
            })
        );
};

module.exports.getMe = (req, res, next) => {
    req.status(200).json(req.decoded);
}