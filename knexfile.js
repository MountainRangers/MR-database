require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
