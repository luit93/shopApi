const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const registeredUser = await newUser.save();
    res.status(201).json(registeredUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user) {
        res.status(401).json("Wrong credentials")
        return
    }

    else{
        
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
          );
          const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      
          if(originalPassword !== req.body.password ){
              
              
             
              res.status(401).json("Wrong credentials2")
              return
          }
          else{
              const accessToken = jwt.sign({
                  id: user._id,isAdmin:user.isAdmin
              },process.env.JWT_SEC,{expiresIn:"2d"})
              const {password, ...others}= user._doc
            res.status(200).json({...others,accessToken});

          }
      
      
    }
  
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
