exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("countries", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("code");
      })
      .catch(error => console.log("error migrating hops", error))
  ]);
};

exports.down = function(knex, Promise) {};
