
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'eggs', description: 'free range eggs', price: 2.99, image: 'image here' , vendors_id: 1},
        {id: 2, title: 'fruits', description: 'free range fruits', price: 5.99, image: 'image here' , vendors_id: 2},
        {id: 3, title: 'vegies', description: 'free range veggies', price: 9.99, image: 'image here' , vendors_id: 2},
        {id: 4, title: 'grape jam', description: 'free range grape jam', price: 12.99, image: 'image here' , vendors_id: 6},
        {id: 5, title: 'pickled things', description: 'free range pickled things', price: 14.99, image: 'image here' , vendors_id: 3},
        {id: 6, title: 'honey', description: 'free range homey', price: 3.99, image: 'image here' , vendors_id: 7},
        {id: 7, title: 'vegan studd', description: 'free range vegan stuff', price: 6.99, image: 'image here' , vendors_id: 4},

      ]);
    });
};
