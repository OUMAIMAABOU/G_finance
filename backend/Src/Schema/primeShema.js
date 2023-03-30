const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar ObjectID

  type Prime {
    _id: ObjectID
    year: int
    taux: Number
  }

  extend type Query {
    ShowAllPrime: [Employer]
  }
  extend type Mutation {
    #  Define the GraphQL mutation for Adding an salaire for  employer
    addPrime(
     year: int
     taux: Number
    ): String
    #  Define the GraphQL mutation for updating an salaire
    UpdateSalaire(id: ObjectID!): String
  }
`;
