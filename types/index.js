const { mergeTypes } = require("merge-graphql-schemas");

const Hop = require("./hops");
const Origin = require("./origins");

const typeDefs = [Hop, Origin];

module.exports = mergeTypes(typeDefs, { all: true });
