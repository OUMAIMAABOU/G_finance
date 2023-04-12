const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar ObjectID

  type Prime {
    _id: ObjectID
    year_min:Int
    year_max:Int
    year: Int
    taux: Int
  }

  extend type Query {
    ShowAllPrime: [Prime]
  }
  extend type Mutation {
    UpdatePrime(id: ObjectID!,taux:Int): Boolean
  }
`;
