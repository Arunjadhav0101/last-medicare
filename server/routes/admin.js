const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/orders', async (req, res) => {
  try {
    const [orders] = await pool.execute('SELECT * FROM orders ORDER BY created_at DESC');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/orders/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    await pool.execute('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/medicines', async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    await pool.execute(
      'INSERT INTO medicines (name, description, price, stock, category) VALUES (?, ?, ?, ?, ?)',
      [name, description, price, stock, category]
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
