const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar ObjectID

  type Salaire {
    _id: ObjectID
    id_employe: ObjectID
    Anciennet: Int
    Salaire_de_base: Float
    id_majoration: Float
    datePaie: String
    prime: Float
    total: Float
    IR: Float
  }

  extend type Query {
    ShowAllSalaire: [Employer]
  }
  extend type Mutation {
    #  Define the GraphQL mutation for Adding an salaire for  employer
    addSalaire(
      id_employe: ObjectID
      anciennet: Int
      salaire_de_base: Float
      id_majoration: Float
      datePaie: String
      prime: Float
      total: Float
      IR: Float
    ): String
    #  Define the GraphQL mutation for updating an salaire
    UpdateSalaire(id: ObjectID!): String
  }
`;
