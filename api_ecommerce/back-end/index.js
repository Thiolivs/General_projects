const express = require('express');
const productRouter = require('./routes/routes');
const app = express();


app.use(express.json());

//initialize route /products according to the settings in my routes file
app.use('/products', productRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`aplicação rodando na porta ${port}`)
})