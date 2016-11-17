'use strict';
let jwt = require('jsonwebtoken');
let config = require('../../config');

module.exports.createUser = function(email, password) {
  return new Promise((resolve, reject) => {
    this
      .findOne({
        email: email,
        password: password
      })
      .lean()
      .exec((err, user) => {
        if (err) {
          return reject(err);
        }

        if (user) {
          return reject('User exists');
        }

        this
          .create({
            email: email,
            password: password
          }, (err, createdUser) => {
            if (err) {
              return reject(err);
            }

            return resolve(createdUser);
          });
      });
  });
}

module.exports.login = function(email, password) {
  return new Promise((resolve, reject) => {
    this
      .findOne({email, password})
      .lean()
      .exec((err, user) => {
        if (err) {
          return reject(err);
        }

        if (!user) {
          return resolve(false);
        }

        resolve(jwt.sign(user, config.secret));
      })
  });
}