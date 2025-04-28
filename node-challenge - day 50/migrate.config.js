require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  direction: 'up',
  logFileName: 'migrations.log',
  databaseUrl: process.env.DATABASE_URL,
};
