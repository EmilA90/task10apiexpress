const { Router } = require('express')

const router = Router()

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


router.get('',

    (req, res) => {
    res.send(groceryList);
});

router.get('/:id',
    (req, res) => {
        const id = Number(req.params.id);
        const item = groceryList.find(item => item.id === id);
        if (!item) {
            res.status(404).send(`Grocery item with id ${id} not found`);
        } else {
            res.send(item);
        }
    }
);


router.post('', 
    (req,res) => {
    groceryList.push(req.body)
    res.send(201)
})


router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = groceryList.findIndex(item => item.id === id);
    if (index === -1) {
      res.status(404).send(`Grocery item with id ${id} not found`);
    } else {
      groceryList.splice(index, 1);
      res.status(204).send();
    }
  });


router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = groceryList.findIndex(item => item.id === id);
    if (index === -1) {
        res.status(404).send(`Grocery item with id ${id} not found`);
    } else {
        groceryList[index] = { ...groceryList[index], ...req.body };
        res.status(200).send(groceryList[index]);
    }
});


router.get('/cart', (req, res) =>{

} )

router.post('/cart/item', (req, res) =>{
    const { item, quantity} = req.body;
    const cartItem = { item, quantity}
    const { cart } = req.session
    if (cart) {
        req.session.cart.items.push(cartItem)
    } else {
        req.session.cart = {
            items: [cartItem]
        }
    }
    res.send(201)
})

module.exports = router;