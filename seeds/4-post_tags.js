exports.seed = function(knex, Promise) {
  return knex('posts_tags').del().then(function() {
    return Promise.all([
      knex('posts_tags').insert({
        post_id: 1,
        tag_id: 6
      }),
      knex('posts_tags').insert({
        post_id: 2,
        tag_id: 5
      }),
      knex('posts_tags').insert({
        post_id: 3,
        tag_id: 4
      }),
      knex('posts_tags').insert({
        post_id: 4,
        tag_id: 3
      }),
      knex('posts_tags').insert({
        post_id: 5,
        tag_id: 2
      }),
      knex('posts_tags').insert({
        post_id: 6,
        tag_id: 1
      }),
      knex('posts_tags').insert({
        post_id: 7,
        tag_id: 6
      }),
      knex('posts_tags').insert({
        post_id: 8,
        tag_id: 5
      }),
      knex('posts_tags').insert({
        post_id: 9,
        tag_id: 4
      }),
      knex('posts_tags').insert({
        post_id: 10,
        tag_id: 3
      }),
      knex('posts_tags').insert({
        post_id:11,
        tag_id: 2
      }),
      knex('posts_tags').insert({
        post_id: 12,
        tag_id: 1
      }),
      knex('posts_tags').insert({
        post_id: 13,
        tag_id: 6
      }),
      knex('posts_tags').insert({
        post_id: 14,
        tag_id: 5
      }),
      knex('posts_tags').insert({
        post_id: 15,
        tag_id: 4
      }),
      knex('posts_tags').insert({
        post_id: 16,
        tag_id: 3
      })
    ]);
  });
};
