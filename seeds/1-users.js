exports.seed = function(knex, Promise) {
    return Promise.all([
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'user1',
        google_id: '45435345',
        photo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'user2',
        google_id: '489798347',
        photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGybpSEQhxWFjG43fXyayot3bXIdaRAds6nIv4lMdSEFs21Vo',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'user3',
        google_id: '59860983',
        photo_url: 'http://www.pamperedpetz.net/wp-content/uploads/2015/09/Puppy1.jpg',
        personal_info: 'I am user3 and I love hiking in NC'
      })
    ]);
  };
