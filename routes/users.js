// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('./model/user'); // Import your Mongoose model

// Route to display the form
router.get('/add', (req, res) => {
  res.render('user-form'); // Assuming you have a user-form.ejs file for your form
});

// Route to handle form submission
router.post('/add', async (req, res) => {
  try {
    const { username, email } = req.body; // Assuming your form has fields for username and email
    const newUser = new User({ username, email });
    await newUser.save();
    res.redirect('/users'); // Redirect to a page showing the list of users
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
