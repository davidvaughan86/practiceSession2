const express = require('express')
const router = express.Router()



router.get("/add-items", (req, res) =>{

    


    res.render('add-items')
})

router.post('/add-items', (req, res) =>{
    let item = req.body.item

    if(req.session){
        req.session.item = item
    }
    console.log(item)
    res.status(200).send()
})

module.exports = router