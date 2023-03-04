const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar ObjectID

  type Employer {
    _id: ObjectID
    name: String
    password: String
    date_naissance: String
    matricule: String
    data_embauche: String
    situation_familiale: String
    nombre_denfant: Int
    adress: String
    N_CIMR: String
    N_CNSS: String
    Service: String
    fonction: String
    siege_social: String
    email: String
    cin: String
    role: ID
    phoneNumber: String
  }

  extend type Query {
    ShowEmployer: [Employer]
  }
  extend type Mutation {
    addEmployer(
      name: String!
      email: String!
      cin: String!
      date_naissance: String!
      data_embauche: String!
      situation_familiale: String!
      nombre_denfant: Int
      adress: String!
      N_CIMR: String!
      N_CNSS: String!
      Service: String!
      fonction: String!
      siege_social: String!
      matricule: String! # role: ID!
    ): String
    deleteEmployer(id: String!): Boolean
  }
`;
