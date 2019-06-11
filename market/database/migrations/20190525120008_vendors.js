
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vendors', vendors => {
      vendors.increments()
      vendors.string('company_name')
      vendors.string('contact_fullname')
      vendors.string('address')
      vendors.string('city')
      vendors.string('state')
      vendors.string('zip_code')
      vendors.string('phone')
      vendors.string('company_url')
      vendors
        .integer('market_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('market')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vendors')
};
