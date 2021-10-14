'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
require('dotenv').config;
const { Sequelize, DataTypes } = require('sequelize');

// Prepare the express app
const app = express();

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const signUpRoutes = require('./routes/signup.js');
const signInRoutes = require('./routes/signin.js');

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(signUpRoutes);
app.use(signInRoutes);


app.use('*', notFoundHandler);
app.use(errorHandler);

// const sequelize = new Sequelize('postgres://localhost:5432/basicauth');

module.exports = {
    server: app,
    // db: sequelize,
    start: port => {
        if (!port) { throw new Error('Missing Port'); }
        app.listen(port, () => console.log(`Listening on port ${port}`));
    },
};

