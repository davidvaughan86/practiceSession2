const express = require('express')
const router = express.Router()


router.get('/', (req,res) =>{
    res.send('ok')
})
router.get('/menu', (req,res) =>{
    let food = {food: req.session.item}
    res.render('menu', food)
})

module.exports = router