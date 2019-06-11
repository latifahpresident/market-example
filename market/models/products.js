const db = require('./../dbconfig.js');

getProductById = (id) => {
    return db('products').where(id)
}

// const newProduct = await db('products').where({vendors_id: id}).insert({...req.body, vendors_id: id})

addProduct = (product) => {
    // return db('products')
    //     .insert(product)
    //     .then(ids => ({ id: ids[0]}))
    return db('products')
        .insert(product)
        // .where('products.vendors_id', id)
}
module.exports = {
    getProductById,
    addProduct,
}