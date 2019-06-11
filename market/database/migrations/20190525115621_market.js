
exports.up = function(knex, Promise) {
  return knex.schema.createTable('markets', markets => {
      markets.increments().primary()
      markets.string('name')
      markets.integer('avail_stalls')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('markets')
};
