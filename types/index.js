const { mergeTypes } = require("merge-graphql-schemas");

const Hop = require("./Hop");
const Origin = require("./Origin");
const Grain = require("./Grain");
const Yeast = require("./Yeast");

const typeDefs = [Hop, Origin, Grain, Yeast];

module.exports = mergeTypes(typeDefs, { all: true });
