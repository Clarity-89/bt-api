const { mergeResolvers } = require("merge-graphql-schemas");
const Hop = require("./hops");

const resolvers = [Hop];

module.exports = mergeResolvers(resolvers);
