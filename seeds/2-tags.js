exports.seed = function(knex, Promise) {
  return knex('tags').del().then(function() {
    return Promise.all([
      knex('tags').insert({
        id: 1,
        name: 'mountain'
      }),
      knex('tags').insert({
        id: 2,
        name: 'desert'
      }),
      knex('tags').insert({
        id: 3,
        name: 'lake'
      })
    ]);
  });
};
