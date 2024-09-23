const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
  // Add more products as needed
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
