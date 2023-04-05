
const express = require('express');
const app = express();
const session = require('express-session')
const groceriesRoute = require('./routes/groceries')
const marketsRoute = require('./routes/markets')

const PORT = 3001;
const { urlencoded } = require('body-parser');

app.use(express.json())
app.use(express.urlencoded())
app.use((req,res,next) => {
    console.log(`${req.method}:${req.url}`);
    next();
})
app.use(
    session({
        secret: "asdasdasdasdasdqdq",
        resave: false,
        saveUninitialized: false,
    })
)

app.use('/api/groceries', groceriesRoute)
app.use('/api/markets', marketsRoute)



app.listen(PORT, () => console.log(`Running server on ${PORT}`));

