// controllers/users.js
const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

// Correct import for the database connection
const db = require('../config/database');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render('login', {
        msg: 'Please Enter Your Email and Password',
        msg_type: 'error',
      });
    }

    // ... (rest of your existing code)

    const apiUrl = 'https://api.example.com/authenticate';
    const apiResponse = await axios.post(apiUrl, { email, password });

    // Check the API response and handle accordingly
    if (apiResponse.data.success) {
      // API authentication successful, proceed with your logic
      // ...

      const id = result[0].ID;
      const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      // ... (rest of your existing code)
    } else {
      return res.status(401).render('login', {
        msg: 'Invalid credentials',
        msg_type: 'error',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).render('login', {
      msg: 'Internal Server Error',
      msg_type: 'error',
    });
  }
};

exports.getDataFromAPI = async (req, res) => {
  try {
    const apiUrl = 'https://api.example.com/data';
    const response = await axios.get(apiUrl);

    // Handle the API response
    console.log(response.data);
    res.render('home', { apiData: response.data });
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.status(500).render('home', {
      msg: 'Internal Server Error',
      msg_type: 'error',
    });
  }
};
