const users = require('./../models/users');
const market = require('./../models/market');
const cart = require('./../models/cart');
const vendors = require('./../models/vendors');
const db = require('./../dbconfig.js');

exports.getVendorsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vendor = await vendors.getVendorById({id})
        const vendorCart = await cart.getVendorCart({id})
        console.log(vendor, 'vendor')
        // const productsData = await vendors.getProductsByVendor({id})
        // console.log(productsData)
        res.status(200).json({vendor, vendorCart})
    } catch (err) {
        res.status(500).json({message: `error getting vendors profile`})
        console.log(err, 'vendor profile error')
    }
}

exports.getVendorsProducts = async (req, res, next) => {
    try {
        const { id } = req.params
        const vendor_products = await vendors.getProductsByVendor(id)
        console.log(vendor_products, 'vendors products')
        res.status(200).json(vendor_products)
    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}