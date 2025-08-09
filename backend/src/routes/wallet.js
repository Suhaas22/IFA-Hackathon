const express = require('express');
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// GET BALANCE
router.get('/balance', authMiddleware, async (req, res) => {
  const wallet = await Wallet.findOne({ where: { UserId: req.user.id } });
  res.json({ balance: parseFloat(wallet.balance) });
});

// CREDIT
router.post('/credit', authMiddleware, async (req, res) => {
  const { amount, description } = req.body;
  const wallet = await Wallet.findOne({ where: { UserId: req.user.id } });

  wallet.balance = parseFloat(wallet.balance) + parseFloat(amount);
  await wallet.save();

  await Transaction.create({ type: 'CREDIT', amount, description, UserId: req.user.id });

  res.json({ message: 'Amount credited', balance: parseFloat(wallet.balance) });
});

// DEBIT
router.post('/debit', authMiddleware, async (req, res) => {
  const { amount, description } = req.body;
  const wallet = await Wallet.findOne({ where: { UserId: req.user.id } });

  if (parseFloat(wallet.balance) < parseFloat(amount)) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }

  wallet.balance = parseFloat(wallet.balance) - parseFloat(amount);
  await wallet.save();

  await Transaction.create({ type: 'DEBIT', amount, description, UserId: req.user.id });

  res.json({ message: 'Amount debited', balance: parseFloat(wallet.balance) });
});

// TRANSACTION HISTORY
router.get('/transactions', authMiddleware, async (req, res) => {
  const transactions = await Transaction.findAll({
    where: { UserId: req.user.id },
    order: [['createdAt', 'DESC']]
  });
  res.json(transactions);
});

module.exports = router;
