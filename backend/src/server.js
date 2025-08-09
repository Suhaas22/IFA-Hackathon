const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/wallet', require('./routes/wallet'));

// Test route
app.get('/', (req, res) => {
  res.send('Wallet API is running...');
});

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected...'))
  .catch(err => console.error('❌ DB connection error: ', err));

// Models
require('./models/User');
require('./models/Wallet');
require('./models/Transaction');

// Sync models
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Models synced to DB'))
  .catch(err => console.error('❌ Error syncing models:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
