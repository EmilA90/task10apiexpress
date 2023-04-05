const  { Router } = require('express')

const router = Router();

const supermarkets = [
    {
        id: 1,
        store: 'Whole Foods',
        miles: 5,
    },
    {
        id: 3,
        store: 'Traders',
        miles: 10,
    },
    {
        id: 2,
        store: 'Aldi',
        miles: 2
    },
    {
        id: 5,
        store: 'Araz',
        miles: 4
    },
    
]
router.get('', (req, res) =>{
    console.log(req.query);
    const { miles } = req.query
    const parsedMiles = parseInt(miles)

    if (!isNaN(parsedMiles)) {
        const filteredStores  = supermarkets.filter((s)=> s.miles <= parsedMiles)
        res.send(filteredStores)
    }
    else 
    res.send(supermarkets)
})


module.exports = router;