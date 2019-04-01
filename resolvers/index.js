const { mergeResolvers } = require("merge-graphql-schemas");

const Hop = require("./Hop");
const Origin = require("./Origin");
const Grain = require("./Grain");
const Yeast = require("./Yeast");

const resolvers = [Hop, Origin, Grain, Yeast];

module.exports = mergeResolvers(resolvers);
