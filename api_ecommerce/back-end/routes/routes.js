const express = require('express');
const crypto = require('crypto')
const router = express.Router();


const products = [
    {
        "id": crypto.randomUUID(),
        "name":"Playstation 5",
        "price":"$1,000.00",
    },    

    {
        "id": crypto.randomUUID(),
        "name":"Desktop",
        "price":"$2,000.00",
    },

    {
        "id": crypto.randomUUID(),
        "name":"Smart TV",
        "price":"$3,000.00",
    }
]

router.get('/', (req,res) =>{
    res.send(products)
})

module.exports = router;