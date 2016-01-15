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
        body: 'I loved this hike! Too tough for Grandma',
        latitude: '40.254902',
        longitude: '-105.616089',
        user_id: 2
      }),
      knex('posts').insert({
        title: 'Devils Head Hike',
        body: 'Wow, what a tough climb! Defintely pach a lunch.',
        latitude: '39.26973158',
        longitude: '-105.104857',
        user_id: 3
      }),
      knex('posts').insert({
        title: 'Collegiate Peaks',
        body: 'The wildflowers are gorgeous this time of year.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 4
      }),
      knex('posts').insert({
        title: 'Hanging Lake',
        body: 'If you ever want to have a great time doing a chill hike, Hanging Lake is the best!',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 5
      }),
      knex('posts').insert({
        title: 'Mt. Everest',
        body: 'Almost lost a limb, dancing around on the top of mount Everest - worth it!',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 6
      }),
      knex('posts').insert({
        title: 'My first hike',
        body: 'I loved this hike!  Cannot wait to do it again',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 7
      }),
      knex('posts').insert({
        title: 'Mt. Kilomanjaro',
        body: 'I loved this hike! It was kinda far away from Denver but still pretty cool :)',
        latitude: '40.254902',
        longitude: '-105.616089',
        user_id: 8
      }),
      knex('posts').insert({
        title: 'K2',
        body: 'I climbed K2 becasue I am a badass',
        latitude: '39.26973158',
        longitude: '-105.104857',
        user_id: 9
      }),
      knex('posts').insert({
        title: 'Matterhorn',
        body: 'Even better than Toberlone.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 10
      }),
      knex('posts').insert({
        title: 'Swiss Alps',
        body: 'Had a great little walk about, apres ski, of course.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 11
      }),
      knex('posts').insert({
        title: 'Danger Zone',
        body: 'Welcome to the Danger Zone!',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 12
      }),
      knex('posts').insert({
        title: 'Patagonia',
        body: 'Who said skiing is for punks, anyways?',
        latitude: '39.26973158',
        longitude: '-105.104857',
        user_id: 13
      }),
      knex('posts').insert({
        title: 'Mt. Hood',
        body: 'I could see Portlandia from the top of this slush mound.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 14
      }),
      knex('posts').insert({
        title: 'Denali',
        body: 'Thanks Obama for re-naming this mountain. Its majesty is overwhelming.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 15
      }),
      knex('posts').insert({
        title: 'Ural Mountain Range',
        body: 'Gosh, the scenery is absolutley gorgeous.',
        latitude: '39.374912',
        longitude: '-104.853859',
        user_id: 16
      })
    ]);
  });
};
