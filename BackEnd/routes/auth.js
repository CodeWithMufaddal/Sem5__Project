const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using Post "/api/auth" Doesn't requair Authorization

router.post('/', [
   body('name', "UserName Must be atleast 3 characters long").isLength({ min: 3 }),

   body('email', "Invalid email").isEmail(),
   // password must be at least 5 chars long
   body('password', "password must be at least 5 chars long").isLength({ min: 5 }),
], (req, res) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
   }).then(user => res.json(user))
      .catch(err => {
         console.log(err);
         res.status(400).json({ errors: [{ msg: "User Already Exists" }]});
      });
})

module.exports = router;