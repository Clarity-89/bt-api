exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("hops", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("origin").references("countries.id");
        table.enu("purpose", ["bittering", "aroma", "bittering & aroma"]);
        table.string("alpha_acid_composition");
        table.string("beta_acid_composition");
        table.string("description");
        table.string("sub_names");
        table.string("beer_style");
        table.integer("substitutes").references("hops.id");
      })
      .catch(error => console.log("error migrating hops", error))
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("hops")]);
};
