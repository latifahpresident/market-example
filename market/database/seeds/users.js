
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'mail@mail.com',password: 'password',  user_type: 'market'},
        {id: 2, email: 'mail1@mail.com', password: 'passwor', user_type: 'vendor'},
        {id: 3, email: 'mail2@mail.com', password: 'passwor', user_type: 'market'}
      ]);
    });
};
