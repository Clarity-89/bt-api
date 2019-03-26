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
      })
      .catch(error => console.log("error migrating hops", error)),
    knex.schema
      .createTable("hops_substitutes", table => {
        table.increments("id").primary();
        table.integer("substitute").references("hops.id");
        table.integer("hop").references("hops.id");
      })
      .catch(error => console.log("error migrating hop subs", error))
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("hops_substitutes"),
    knex.schema.dropTable("hops")
  ]);
};
