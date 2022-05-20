const router = require('express').Router()

router.get('/usertest',(req,res)=>{
    res.json({message:'user test successfull'})
})
router.post('/testpost',(req,res)=>{
    const username = req.body.username
    res.send(`your username is : ${username}`)
})

module.exports = router