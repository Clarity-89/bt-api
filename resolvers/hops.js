const knex = require("../connection");

module.exports = {
  Query: {
    hop: async (root, { id }) => {
      const res = await knex("hops")
        .select()
        .where("id", id);
      console.log("got data", res);
      return res;
    }
  }
};
