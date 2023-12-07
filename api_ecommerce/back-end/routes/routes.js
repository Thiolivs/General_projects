const express = require('express');
const crypto = require('crypto');
const router = express.Router();


const products = []

    // {
    //     "id": crypto.randomUUID(),
    //     "name":"Playstation 5",
    //     "price":"$1,000.00",
    // }

router.get('/', (req,res) =>{
    res.send(products);
})

router.get('/:id', (req,res) =>{
    const idParam = req.params.id;
    const product = products.find((prod)=> prod.id == idParam);

    if(!product){
        res.status(404).send('Produto nao encontrado');
    }
    res.send(product);
})

router.post('/add',(req,res)=>{
    const product = req.body;
    const newProduct ={
        id: crypto.randomUUID(),
        ...product
    }

    if(!product.name || !product.price){
        res.status(404).send('Estao faltando dados do produto');
    }
    else{
        products.push(newProduct);
        res.status(201).send('Produto cadastrado com sucesso');
    }
})


router.delete('/delete/:id',(req,res)=>{
    const idParam = req.params.id;

    const index = products.findIndex((prod)=> prod.id == idParam);
    products.splice(index, 1);
    res.status(201).send('Produto removido com sucesso');
})


router.put('/update/:id',(req,res)=>{
    const idParam = req.params.id;
    const editProduct = req.body;
    const index = products.findIndex((prod)=> prod.id == idParam);
    products[index] = {
        ...products[index],
        ...editProduct
    }
    res.status(201).send('Produto atualizado com sucesso');
})

module.exports = router;