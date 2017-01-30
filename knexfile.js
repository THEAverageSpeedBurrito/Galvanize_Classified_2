// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/development'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
