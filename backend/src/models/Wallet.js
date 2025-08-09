const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Wallet = sequelize.define('Wallet', {
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  }
});

// 1:1 relationship with User
User.hasOne(Wallet, { onDelete: 'CASCADE' });
Wallet.belongsTo(User);

module.exports = Wallet;
