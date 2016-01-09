
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', function(table){
        table.increments('id').primary();
        table.date('date_joined');
        table.string('username', 20);
        table.string('email', 50);
        table.string('photo_url', 500);
        table.text('personal_info');
      })
      ,
      knex.schema.createTable('posts', function(table){
        table.increments('id').primary();
        table.dateTime('date_posted');
        table.string('title');
        table.text('body');
        table.string('latitude');
        table.string('longitude');
        table.integer('user_id').references('id').inTable('users');
      })
      ,
      knex.schema.createTable('tags', function(table){
        table.increments('id').primary();
        table.string('name');
      })
      ,
      knex.schema.createTable('posts_tags', function(table){
        table.integer('post_id').references('id').inTable('posts');
        table.integer('tag_id').references('id').inTable('tags');
      })
    ]);
  };
  


exports.down = function(knex, Promise) {
  
};
