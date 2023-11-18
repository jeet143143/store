// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('./model/user');

router.get('/add', (req, res) => {
  res.render('user-form'); 
});

router.post('/add', async (req, res) => {
  try {
    const { username, email ,content,passward,number} = req.body; 
    const newUser = new User({ username, email ,content,passward,number});
    await newUser.save();
    res.redirect('/users'); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






module.exports = router;
