const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar ObjectID

  type Salaire {
    _id: ObjectID
    id_employe: ObjectID
    Salaire_de_base: Float
    Salaire_brut: Float
    prime_d_anciennete: Float
    exoneres: Float
    deduction: Float
    salaire_net_imposable:Float
    Salaire_brut_imposabel:Float
    IR:Float
    avance_salair:Float
    charge_familaire:Float
    datePaie: String
    prime: Float
    IR_brut: Float
    IR_net: Float
    CNSS:Float
    AMO:Float
    CIMR:Float
    Mutuele:Float
    frais_pro:Float
    Heurs_supplementaire:Float

  }

  # extend type Query {
  #   ShowAllSalaire: [Employer]
  # }
  extend type Mutation {
    #  Define the GraphQL mutation for Adding an salaire for  employer
    calculaireSalaire(
      id_employe: ObjectID!
      salaire_de_base: Float!
      prime: Float!
      Salaire_brut: Float
      exoneres: Float!
      avance_salair:Float!
      Heurs_supplementaire:Float!,
    ):Float

    calculaireSalaireBrut(
      id_employe: ObjectID!
      Salaire_brut: Float
      exoneres: Float!
      avance_salair:Float!,
      prime:Float
    ):Float
    #  Define the GraphQL mutation for updating an salaire
    # UpdateSalaire(id: ObjectID!): String
  }
`;
