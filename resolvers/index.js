const { mergeResolvers } = require("merge-graphql-schemas");

const Hop = require("./hops");
const Origin = require("./origins");

const resolvers = [Hop, Origin];

module.exports = mergeResolvers(resolvers);
