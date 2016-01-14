exports.seed = function(knex, Promise) {
  return knex('tags').del().then(function() {
    return Promise.all([
      knex('tags').insert({
        name: 'mountain'
      }),
      knex('tags').insert({
        name: 'desert'
      }),
      knex('tags').insert({
        name: 'lake'
      }),
      knex('tags').insert({
        name: 'urban'
      }),
      knex('tags').insert({
        name: 'tree'
      }),
      knex('tags').insert({
        name: 'feather'
      }),
      knex('tags').insert({
        name: 'all'
      })
    ]);
  });
};
