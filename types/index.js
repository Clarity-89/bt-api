const { mergeTypes } = require("merge-graphql-schemas");

const Hop = require("./Hop");
const Origin = require("./Origin");
const Grain = require("./Grain");

const typeDefs = [Hop, Origin, Grain];

module.exports = mergeTypes(typeDefs, { all: true });
