
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stalls', stalls => {
      stalls.increments()
      stalls.string('name')
      stalls.string('size')
      stalls
        .integer('market_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('market')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stalls')
};
