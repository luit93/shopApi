const Users = require('../models/Users')
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken')

const router = require('express').Router()


//update
router.put('/:id',verifyTokenAndAuthorization, async (req,res)=>{
    if(req.body.password){
    password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString()
    }

    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
        
    }

})

module.exports = router