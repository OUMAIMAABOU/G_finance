const { gql } = require("apollo-server-express");
module.exports = gql`
  scalar ObjectID

  type ImpotRevenu {
    _id: ObjectID
    salaire_min: Float
    salaire_max: Float
    somme_deduire: Float
    taux: Int
  }

  extend type Query {
    ShowAllRevenu: [ImpotRevenu]
  }
  extend type Mutation {
    updateImpotRevenu(
      id: ObjectID!
      salaire_min: Float
      salaire_max: Float
      somme_deduire: Float
      taux: Int
    ): Float
  }
`;
