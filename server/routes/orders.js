const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const [orders] = await pool.execute('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.params.userId]);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { userId, items, total, address } = req.body;
    const [result] = await pool.execute(
      'INSERT INTO orders (user_id, items, total, address, status) VALUES (?, ?, ?, ?, ?)',
      [userId, JSON.stringify(items), total, address, 'pending']
    );
    res.json({ success: true, orderId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
