const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');

router.get('/profile', authenticateUser, (req, res) => {
  const user = res.locals.user;
  res.json({ user });
});

module.exports = router;