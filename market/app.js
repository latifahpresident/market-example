const express = require('express')
const cors = require('cors');
const usersRoutes = require('./routes/marketsRoutes');
const vendorsRoutes = require('./routes/vendorsRoutes');
const productsRoutes = require('./routes/productsRoutes');
const server = express()

server.use(express.json())
server.use(cors());

// server.use('/users',  usersRoutes)
server.use('/market',  usersRoutes)
server.use('/vendors', vendorsRoutes, productsRoutes)


server.get('/', (req, res, next) => {
    res.send('sanity check')
}) 


module.exports = server