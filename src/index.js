const { urlencoded } = require('body-parser');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())

const groceryList =[
    {
    id: 2,
    quant:12
    },
    {
    id: 3,
    quant:13
    },
    {
    id: 5,
    quant:14
    }

];

app.listen(PORT, () => console.log(`Running server on ${PORT}`));

app.get('/groceries', (req, res) => {
    res.send(groceryList);
});


app.post('/groceries', (req,res) => {
    groceryList.push(req.body)
    res.send(201)
})

app.delete('/groceries/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = groceryList.findIndex(item => item.id === id);
    if (index === -1) {
      res.status(404).send(`Grocery item with id ${id} not found`);
    } else {
      groceryList.splice(index, 1);
      res.status(204).send();
    }
  });


  app.put('/groceries/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = groceryList.findIndex(item => item.id === id);
    if (index === -1) {
      res.status(404).send(`Grocery item with id ${id} not found`);
    } else {
      groceryList[index] = { ...groceryList[index], ...req.body };
      res.status(200).send(groceryList[index]);
    }
  });
  