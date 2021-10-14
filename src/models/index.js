'use strict';

require('dotenv').config();
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes} = require('sequelize');
const UserModel = require('./users.js');

// const Collection = require('./lib/collection');
const users = require('./users.js');


const sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const sequelize = new Sequelize('postgres://localhost:5432/basicauth', sequelizeOptions);


module.exports = {
    db: sequelize,
    User: UserModel(sequelize, DataTypes),

};

