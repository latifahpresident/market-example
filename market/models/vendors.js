const db = require('./../dbconfig.js');

getVendorById = (id) => {
return db('vendors').where(id)
}
// exports.attachPostCategory = (postId, categoryId) => {  
//     return db.insert({ post_id: postId, category_id: categoryId }).into(TABLES.CATEGORIES_POSTS).returning('*');
// };
getVendorCartById = (id) => {
    return db('cart')
        .innerJoin('vendors', 'cart.vendor_id', 'vendors.id')
        .select('cart.id', 'vendors.id')
        .where('cart.vendor_id', id)
    }

getProductsByVendor = (id) => {
     const vendor_products = db.from('products')
    .innerJoin('vendors', 'products.vendors_id', 'vendors.id' )
    .select( 'products.id', 'products.title', 'products.description', 'products.price', 'products.image')
    .where('products.vendors_id', id)
    console.log(vendor_products, 'vendor products from model')
    return vendor_products
}

getVendorByMarket = (id) => {
    return db.from('vendors')
    .innerJoin('market', 'vendors.market_id', 'market.id', )
    .select('vendors.id', 'vendors.market_id', 'vendors.company_name as vendors name', 'market.name')
    .where('vendors.market_id', id)
}

module.exports = {
    getVendorById,
    getVendorByMarket,
    getProductsByVendor,
    getVendorCartById
}