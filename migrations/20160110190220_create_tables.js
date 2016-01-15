exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('email');
      table.string('username', 20);
      table.string('google_id');
      table.string('photo_url', 500);
      table.text('personal_info');
    }),
    knex.schema.createTableIfNotExists('posts', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('title');
      table.text('body');
      table.string('latitude');
      table.string('longitude');
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('tags', function(table) {
      table.increments('id').primary();
      table.string('name');
    }),
    knex.schema.createTableIfNotExists('posts_tags', function(table) {
      table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
      table.integer('tag_id').references('id').inTable('tags').onDelete('CASCADE');
    })
  ]);
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('posts_tags'),
    knex.schema.dropTableIfExists('tags'),
    knex.schema.dropTableIfExists('posts'),
    knex.schema.dropTableIfExists('users'),
  ]);
};
