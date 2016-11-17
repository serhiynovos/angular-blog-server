'use strict';
let config = require('../config');
module.exports.ensureAuthorized = (req, res, next) => {
    let token = req.body.token || req.param('token') || req.headers['x-access-token']

    if (token) {
        jsonwebtoken.verify(token, config.secret, function(err, decoded) {
            if (err) {
                res.status(403).send({ success: false, message: 'Failed to authenticate user' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({ success: false, message: 'no Token provided' });
    }
}