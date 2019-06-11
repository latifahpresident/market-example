const users = require('./../models/users');
const market = require('./../models/market');
const vendors = require('./../models/vendors');
const db = require('./../dbconfig.js');

exports.getAllUsers = async (req, res, next) => {
    try {
        const usersData = await users.getUsers()
        console.log(usersData)
        res.status(200).json(usersData)
    } catch (err) {
        res.status(500).json(`No users found`)
        console.log(err)
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await users.getUserById(id)
        if(!data) {
            res.status(400).json({message: `That user does not exist`})
        } else {
            res.status(200).json(data)
        }
    } catch (err) {
        res.status(500).json(err)
    }
};


exports.getMarketById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const venList = await vendors.getVendorByMarket(id)
        const marketData = await market.getMarketById({id})
        const stalls = await market.getMarketStalls(id)
        // const stallSize = await market.getStallSize()
        console.log(stalls, 'stalls data')
        res.status(200).json({marketData, venList, stalls})
    } catch (err)  {
        res.status(500).json({message: `error getting vendors list`})
        console.log(err, 'error from vendors list')
    }
}

exports.addStall = async (req, res, next) => {
    try {
        const {id} = req.params;
        const marketData = await market.getMarketById({id})
        console.log(marketData, 'from add stalls')
        if (marketData) {
            const stalls = req.body
            // const stallsData = await market.addStalls(stalls, id)
            const reviews = await db('stalls').insert({market_id: id, ...stalls}).where({ market_id: id })

            res.status(201).json(`your stall has been added`)
        }
    } catch (err) {
        console.log(err, 'error from add stalls')
        res.status(err).json(500)
    }
}

