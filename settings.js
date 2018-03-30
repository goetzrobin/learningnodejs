require('dotenv').config({silent: true});

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    // Environment-dependent settings
    development: {
      db: {
        dialect: 'mysql',
        storage: ':memory:',
        host: 'localhost',//process.env.HOST,
        user: 'root',//process.env.USER,
        password: 'yourpassword',//process.env.PASSWORD,
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
  