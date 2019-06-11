const products = require('./../models/products');
const market = require('./../models/market');
const vendors = require('./../models/vendors');
const db = require('./../dbconfig.js');

exports.addProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vendor = await vendors.getVendorById({id})
        if (vendor) {
            const newProduct = await products.addProduct({...req.body})
            res.status(201).json({message: `your product has been added`})
        }

    } catch (err) {
        res.status(500).json({message: `error adding product`})
        console.log(err, `add product error`)
    }
}
