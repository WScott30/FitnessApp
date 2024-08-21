const axios = require('axios');

const authenticateUser = async (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const res = await axios.get('/api/auth', {
      headers: { 'x-auth-token': token }
    });
    res.locals.user = res.data; 
    next(); 
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = authenticateUser;
