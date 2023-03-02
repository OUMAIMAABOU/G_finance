const { gql } = require("apollo-server-express");

module.exports = gql`
  type Employer {
    id: Int
    name: String
    email: String
    password: String
    role: String
  }
  type AuthPayload{
      user : User
      token : String
  }
  extend type Query {
    hello: String
  }
  extend type Mutation {
    AddEmployer(name: String!, email: String!): User
  }
`;
