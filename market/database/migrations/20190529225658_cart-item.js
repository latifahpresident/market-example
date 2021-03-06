
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart_item', cart_item => {
      cart_item.increments()
      cart_item
        .integer('cart_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cart')
        cart_item
        .integer('stalls_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('stalls')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cart_item')
};
