require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.PROD_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
