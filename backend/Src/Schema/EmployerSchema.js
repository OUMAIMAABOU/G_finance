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
    role: ObjectID
    phoneNumber: String
  }

  #  Define the GraphQL input type for updating an employer
  input EmployerInput {
    _id: ObjectID!
    name: String
    password: String
    date_naissance: String
    matricule: String
    data_embauche: String
    situation_familiale: String
    nombre_Denfant: Int
    adress: String
    N_CIMR: String
    N_CNSS: String
    Service: String
    fonction: String
    siege_social: String
    email: String
    cin: String
    role: ObjectID
    phoneNumber: String
  }

  extend type Query {
    ShowEmployer: [Employer]
  }
  extend type Mutation {
    #  Define the GraphQL mutation for Adding an employer
    addEmployer(
      name: String
      email: String
      cin: String
      date_naissance: String
      data_embauche: String
      situation_familiale: String
      nombre_Denfant: Int
      adress: String
      N_CIMR: String
      N_CNSS: String
      Service: String
      fonction: String
      siege_social: String
      matricule: String
      role: ObjectID

    ): String
    #  Define the GraphQL mutation for Ddeleting an employer
    deleteEmployer(id: ObjectID!): Boolean
    #  Define the GraphQL mutation for updating an employer
    UpdateEmployer(input: EmployerInput): Float
  }
`;
