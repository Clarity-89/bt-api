exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("hops", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("description");
      table.string("alpha_acid_composition");
      table.integer("substitutes").references("hops.id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("hops")]);
};
