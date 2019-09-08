module.exports = /* GraphQL */ `
  enum Purpose {
    bittering
    aroma
    dual
  }

  type Hop {
    id: String!
    name: String!
    origin: Origin
    purpose: Purpose
    alpha_acid_composition: Float
    beta_acid_composition: Float
    description: String
    sub_names: String
    beer_style: String
    image: String
  }

  type HopConnection {
    cursor: String!
    hasMore: Boolean!
    hops: [Hop]!
    totalCount: Int!
  }

  type Query {
    hop(id: String!): Hop
    hops(pageSize: Int, after: String): HopConnection!
  }

  schema {
    query: Query
  }
`;
