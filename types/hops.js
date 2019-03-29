module.exports = `
  type Hop {
    id: String!
    name: String
    purpose: String   
    alpha_acid_composition: String
  }
  
  type Query {
      hop(id: String!): Hop
      hops: [Hop]
     }
`;
