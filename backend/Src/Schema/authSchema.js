const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    role: ID!
  }

  extend type Mutation {
    signup(name: String!, email: String!, role: ID!, password: String): User
    login(email: String!, password: String!): String
    role(role: String!): User
    foregetPassword(email: String!): String
    resetPassword(password: String!, token: String!): User
    verifierToken(token:String!) : String
  }
`;
