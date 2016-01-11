exports.seed = function(knex, Promise) {
  return knex('posts_tags').del().then(function() {
    return Promise.all([
      knex('posts_tags').insert({
        post_id: 1,
        tag_id: 2
      }),
      knex('posts_tags').insert({
        post_id: 2,
        tag_id: 3
      }),
      knex('posts_tags').insert({
        post_id: 3,
        tag_id: 1
      })
    ]);
  });
};
