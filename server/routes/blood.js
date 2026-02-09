const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/inventory', async (req, res) => {
  try {
    const [inventory] = await pool.execute('SELECT * FROM blood_inventory');
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/register-donor', async (req, res) => {
  try {
    const { name, blood_group, phone, email, address } = req.body;
    await pool.execute(
      'INSERT INTO blood_donors (name, blood_group, phone, email, address) VALUES (?, ?, ?, ?, ?)',
      [name, blood_group, phone, email, address]
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/request', async (req, res) => {
  try {
    const { patient_name, blood_group, units, phone, hospital } = req.body;
    await pool.execute(
      'INSERT INTO blood_requests (patient_name, blood_group, units, phone, hospital, status) VALUES (?, ?, ?, ?, ?, ?)',
      [patient_name, blood_group, units, phone, hospital, 'pending']
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
