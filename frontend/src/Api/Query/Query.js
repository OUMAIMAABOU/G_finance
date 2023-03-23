import { gql } from "@apollo/client";

export const GET_EMPLOYER = gql`
  query ShowEmployer {
    ShowEmployer {
      N_CIMR
      N_CNSS
      Service
      data_embauche
      email
      fonction
      name
      phoneNumber
      _id
      adress
      cin
    }
  }
`;
