const knex = require("../connection");
const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    hop: async (root, { id }) => {
      try {
        const hops = await knex("hops")
          .select()
          .where("id", id);
        return hops[0];
      } catch (e) {
        console.error("Error retrieving hop", e);
      }
    },
    hops: async (_, { pageSize = 20, after }) => {
      try {
        const allResults = await knex("hops").select();
        const hops = paginateResults({
          after,
          pageSize,
          results: allResults
        });
        const lastCursor = hops[hops.length - 1].cursor;
        return {
          hops,
          cursor: hops.length ? lastCursor : null,
          // if the cursor of the end of the paginated results is the same as the
          // last item in _all_ results, then there are no more results after this
          hasMore: hops.length
            ? lastCursor !== allResults[allResults.length - 1].cursor
            : false,
          totalCount: allResults.length
        };
      } catch (e) {
        console.error("Error fetching hops", e);
      }
    }
  },
  Hop: {
    origin: async ({ origin }) => {
      try {
        const origins = await knex("countries")
          .select()
          .where("id", origin);
        return origins[0];
      } catch (e) {
        console.error("Error fetching origin for hop", e);
      }
    }
  }
};
