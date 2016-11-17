'use strict';
let mongoose = require('mongoose');
let statics = require('./statics/user.statics');

let userSchema = new mongoose.Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

userSchema.statics.createUser = statics.createUser;
userSchema.statics.login = statics.login;

module.exports = mongoose.model('User', userSchema);