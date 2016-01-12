exports.seed = function(knex, Promise) {
  return knex('posts').del().then(function() {
    return Promise.all([
      knex('posts').insert({
        title: 'My first hike',
        body: 'I loved this hike!  Cannot wait to do it again',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 1
      }),
      knex('posts').insert({
        title: 'Longs Peak hike',
        body: 'I loved this hike!  Cannot wait to do it again.  Too tough for Grandma',
        latitude: '40.254902',
        longitude: '-105.616089',
        user_id: 2
      }),
      knex('posts').insert({
        title: 'Devils Head Hike',
        body: 'I loved this hike!  Cannot wait to do it again.  Cool fire tower at the top',
        latitude: '39.26973158',
        longitude: '-105.104857',
        user_id: 3
      })
    ]);
  });
};
