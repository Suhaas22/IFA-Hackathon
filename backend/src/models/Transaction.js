const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Transaction = sequelize.define('Transaction', {
  type: {
    type: DataTypes.ENUM('CREDIT', 'DEBIT'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
});

// Many transactions belong to one user
User.hasMany(Transaction, { onDelete: 'CASCADE' });
Transaction.belongsTo(User);

module.exports = Transaction;
