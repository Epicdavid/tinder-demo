require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongourl = process.env.MONURL;
const mongoose = require('mongoose')
var cors = require('cors')

const Card = require('./db')


//Middleware
app.use(express.json())
app.use(cors())






//Endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/card', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {

        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})

app.get('/card', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})



//DB Config
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})




//Listener
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})