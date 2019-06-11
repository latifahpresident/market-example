
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('market').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('market').insert([
        {id: 1, name: 'austin market', avail_stalls: 10},
        {id: 2, name: 'round rock market', avail_stalls: 4},
        {id: 3, name: 'brushy creek market', avail_stalls: 0}
      ]);
    });
};
