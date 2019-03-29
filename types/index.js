const { mergeTypes } = require("merge-graphql-schemas");

const Hop = require("./hops");

const typeDefs = [Hop];

module.exports = mergeTypes(typeDefs, { all: true });
