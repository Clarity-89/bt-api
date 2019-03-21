exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("hops", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description");
        table.string("alpha_acid_composition");
        table.string("beta_acid_composition");
        table.string("origin");
        table.enu("purpose", ["bittering", "aroma", "bittering & aroma"]);
        table.integer("substitutes").references("hops.id");
        table.string("beer_style");
      })
      .catch(error => console.log("error migrating hops", error))
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("hops")]);
};
