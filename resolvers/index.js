const { mergeResolvers } = require("merge-graphql-schemas");

const Hop = require("./Hop");
const Origin = require("./Origin");
const Grain = require("./Grain");

const resolvers = [Hop, Origin, Grain];

module.exports = mergeResolvers(resolvers);
