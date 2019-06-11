
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stalls').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stalls').insert([
        {id: 1, name: 'small', size: {len: 10, w: 5}, market_id: 1},
        {id: 2, name: 'medium', size: {len: 10, w: 15}, market_id: 2},
        {id: 3, name: 'large', size: {len: 30, w: 5}, market_id: 3},
        {id: 4, name: 'small', size: {len: 10, w: 55}, market_id: 1},
        {id: 5, name: 'medium', size: {len: 20, w: 35}, market_id: 2},
        {id: 6, name: 'large', size: {len: 10, w: 75}, market_id: 2},
      ]);
    });
};
