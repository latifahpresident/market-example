const db = require('../dbconfig.js');
//post are vendors users are markets

getMarketById = (id) => {
    return db('market').where(id)
}

// return db.from('vendors')
// .innerJoin('market', 'vendors.market_id', 'market.id', )
// .select('vendors.id', 'vendors.market_id', 'vendors.company_name as vendors name', 'market.name')
// .where('vendors.market_id', id)
// knex_raw("array_agg(json_build_object("id", event.id, "date", event.date))
// db.raw('json_extract(??, "$.len")', ['size'])
// knex('paymentlogs').whereRaw("info->>'provider' = ?", ['paypal'])
// whereRaw("data->'author'->>'first_name'=? ",[books[0].author.first_name])

// getStallSize = () => {
//     return db('stalls').whereRawwhereRaw("size->'len'->> =? ",[books[0].author.first_name])
// }
getMarketStalls = (id) => {
    return db('stalls')
        .innerJoin('market', 'stalls.market_id', 'market.id')
        .select('market.name as owned by', 'stalls.name','stalls.size' )
        .where('stalls.market_id', id)
}

addStalls = (stalls, id) => {
    return db('stalls').insert(stalls, id).where({market_id: id})
}


module.exports = {
    getMarketById,
    getMarketStalls,
    addStalls
}