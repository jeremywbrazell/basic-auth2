'use strict';

const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const UserModel = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  users.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 5).then(hashedPassword => {
      user.password = hashedPassword;
    })
  })
}

module.exports = UserModel;