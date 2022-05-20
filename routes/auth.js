const router = require("express").Router();
const User = require("../models/Users");

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const registeredUser = await newUser.save();
    res.status(201).json(registeredUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
