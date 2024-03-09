// routes/pages.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', (req, res) => {
  res.render('login');
});

// Change this route to a POST request if the API call in users.js is a POST request
router.get('/api/data', userController.getDataFromAPI);

// ... (rest of your existing routes)

module.exports = router;
