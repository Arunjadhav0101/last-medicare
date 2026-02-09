const express = require('express');
const router = express.Router();

router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;
    // Simple chatbot logic
    let response = "I'm here to help! Please ask about medicines, orders, or blood bank services.";
    
    if (message.toLowerCase().includes('order')) {
      response = "You can view your orders in the 'My Orders' section. Need help with a specific order?";
    } else if (message.toLowerCase().includes('medicine')) {
      response = "Browse our catalog to find medicines. You can search by name or category.";
    } else if (message.toLowerCase().includes('blood')) {
      response = "Visit our Blood Bank section to register as a donor or request blood.";
    }
    
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
