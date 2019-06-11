const db = require ('../dbconfig');


getVendorCart = (id) => {
    return db('cart').where(id)
}

exports.attachPostCategory = (postId, categoryId) => {  
    return db.insert({ post_id: postId, category_id: categoryId }).into(TABLES.CATEGORIES_POSTS).returning('*');
};

addToCart = (stallId, cartId) => {
    return db('cart_item')
        .insert({stalls_id: stallId, cart_id: cartId})
        .returning('*')
}
module.exports = {
    getVendorCart,
    addToCart
}