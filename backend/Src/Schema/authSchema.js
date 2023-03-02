const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    role: String
  }
  type AuthPayload {
    user: User
    token: String
  }
  extend type Query {
    hello: String
  }
  extend type Mutation {
    signup(name: String!, email: String!, role: String, password: String): User
    login(email: String!, password: String!): User
    role(role: String!): User
    foregetPassword(email : String!) : String
    resetPassword(password : String! , token : String!) : User
  }
`;
