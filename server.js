'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config');
let routes = require('./routes/index');
let cors = require('cors');

mongoose.connect(config.db, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to mongoose!!');
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.listen(process.env.PORT || 3300, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running");
    }
});