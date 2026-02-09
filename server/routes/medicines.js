const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const [medicines] = await pool.execute('SELECT * FROM medicines');
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [medicines] = await pool.execute('SELECT * FROM medicines WHERE id = ?', [req.params.id]);
    res.json(medicines[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/check-stock', async (req, res) => {
  try {
    const { medicineId } = req.body;
    const [result] = await pool.execute('SELECT stock FROM medicines WHERE id = ?', [medicineId]);
    res.json({ stock: result[0]?.stock || 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
