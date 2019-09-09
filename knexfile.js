module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/budget.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    }, // Migrations
    seeds: {
      directory: "./data/seeds"
    } // Seeds
  } // Development Config Object
};
