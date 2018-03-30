require('dotenv').config({silent: true});

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    // Environment-dependent settings
    development: {
      db: {
        dialect: 'mysql',
        storage: ':memory:',
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      }
    },
    production: {
      db: {
        dialect: 'sqlite',
        storage: 'db/database.sqlite'
      }
    }
  };
  