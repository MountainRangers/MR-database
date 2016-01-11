exports.seed = function(knex, Promise) {
  return knex('users').del().then(function() {
    return Promise.all([
      knex('users').insert({
        id: 1,
        date_created: '1/1/2016',
        username: 'user1',
        email: 'user1@gmail.com',
        profile_photo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        id: 2,
        date_created: '1/2/2016',
        username: 'user2',
        email: 'user2@gmail.com',
        profile_photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGybpSEQhxWFjG43fXyayot3bXIdaRAds6nIv4lMdSEFs21Vo',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        id: 3,
        date_created: '1/3/2016',
        username: 'user3',
        email: 'user3@gmail.com',
        profile_photo_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNq_riPddaKSMsGEwdbyOXpz-JoERWiehOgWggHNegxZUhnieUtags.',
        personal_info: 'I am user3 and I love hiking in NC'
      })
    ]);
  });
};
