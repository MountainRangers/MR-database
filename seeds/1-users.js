exports.seed = function(knex, Promise) {
    return Promise.all([
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'Zac',
        google_id: '45435345',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/802/card_15-10-FS-DP-5619.jpg',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'Ryan',
        google_id: '489798347',
        photo_url: 'https://avatars3.githubusercontent.com/u/13630604?v=3&s=400',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Justin',
        google_id: '59860983',
        photo_url: 'https://avatars2.githubusercontent.com/u/14334875?v=3&s=400',
        personal_info: 'I am user3 and I love hiking in NC'
      }),
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'Elana',
        google_id: '45435345',
        photo_url: 'https://avatars3.githubusercontent.com/u/7654369?v=3&s=400',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'Anna',
        google_id: '489798347',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/707/card_AnnaHuffmanProfile.jpg',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Danny',
        google_id: '59860983',
        photo_url: 'https://avatars2.githubusercontent.com/u/315788?v=3&s=400',
        personal_info: 'I am user3 and I love hiking in NC'
      }),
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'Brian',
        google_id: '45435345',
        photo_url: 'https://avatars1.githubusercontent.com/u/4156395?v=3&s=400',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'Kyle',
        google_id: '489798347',
        photo_url: 'https://avatars3.githubusercontent.com/u/1958931?v=3&s=400',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Chris',
        google_id: '59860983',
        photo_url: 'https://avatars1.githubusercontent.com/u/10334271?v=3&s=400',
        personal_info: 'I am user3 and I love hiking in NC'
      }),
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'Brooke',
        google_id: '45435345',
        photo_url: 'https://avatars3.githubusercontent.com/u/11908147?v=3&s=400',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'Beaureguard',
        google_id: '489798347',
        photo_url: 'https://avatars3.githubusercontent.com/u/14810384?v=3&s=400',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Steve',
        google_id: '59860983',
        photo_url: 'https://avatars0.githubusercontent.com/u/251000?v=3&s=400',
        personal_info: 'I am user3 and I love hiking in NC'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Ben',
        google_id: '59860983',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/708/card_15-10-FS-DP-5242.jpg',
        personal_info: 'I am user3 and I love hiking in NC'
      }),
      knex('users').insert({
        email: 'user1@gmail.com',
        username: 'Justin',
        google_id: '45435345',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/718/card_15-10-FS-DP-5265.jpg',
        personal_info: 'I am user1 and I love hiking in CO'
      }),
      knex('users').insert({
        email: 'user2@gmail.com',
        username: 'Isaac',
        google_id: '489798347',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/715/card_chill.jpg',
        personal_info: 'I am user2 and I love hiking in UT'
      }),
      knex('users').insert({
        email: 'user3@gmail.com',
        username: 'Josh',
        google_id: '59860983',
        photo_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/user/avatar/717/card_15-10-FS-DP-5624.jpg',
        personal_info: 'I am user3 and I love hiking in NC'
      })
    ]);
  };
