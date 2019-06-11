
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', products => {
      products.increments()

      products.string('title')
      products.string('description', 450)
      products.float('price')
      products.string('image', 250)
      products
        .integer('vendors_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('vendors')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products')
};
