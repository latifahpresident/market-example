
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {id: 1, company_name: 'we sells eggs', market_id: 1},
        {id: 2, company_name: 'fresh milk', market_id: 2},
        {id: 3, company_name: 'vegies', market_id: 2},
        {id: 4, company_name: 'vegan stuff', market_id: 3},
        {id: 5, company_name: 'juices', market_id: 2},
        {id: 6, company_name: 'we sell things', market_id: 1},
        {id: 7, company_name: 'fruit stall', market_id: 3},
      ]);
    });
};
