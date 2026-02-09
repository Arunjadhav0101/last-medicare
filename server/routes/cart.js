const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const [cart] = await pool.execute('SELECT * FROM cart WHERE user_id = ?', [req.params.userId]);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { userId, medicineId, quantity } = req.body;
    await pool.execute(
      'INSERT INTO cart (user_id, medicine_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?',
      [userId, medicineId, quantity, quantity]
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await pool.execute('DELETE FROM cart WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
