require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
