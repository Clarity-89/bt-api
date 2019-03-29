const restify = require("restify");
const expressGraphQL = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./types/");
const resolvers = require("./resolvers/");

// GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Create an express server and a GraphQL endpoint
const app = restify.createServer();

app.get(
  "/hops",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.post(
  "/hops",
  expressGraphQL({
    schema,
    graphiql: false
  })
);
app.listen(3001, () =>
  console.log("Express GraphQL Server Now Running On localhost:3001/hops")
);
