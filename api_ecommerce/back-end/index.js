const express = require('express')
const cors = require('cors')

const productRouter = require('./routes/routes');

const app = express()

app.use(express.json());
app.use(cors());

//initialize route /products according to the settings in my routes file
app.use('/products', productRouter);

app.get('/', (req,res) =>{
    res.send(products)
})

app.get('/products/:id', (req,res) =>{
    const idParam = req.params.id;
    const product = products.find((prod)=> prod.id == idParam);
    res.send(product)
})

const port = 3000;
app.listen(port, () => {
    console.log(`aplicação rodando na porta ${port}`)
})