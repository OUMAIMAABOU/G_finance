import { gql } from "@apollo/client";

export const GET_EMPLOYER = gql`
  query ShowEmployer {
    ShowEmployer {
      N_CIMR
      N_CNSS
      Service
      _id
      adress
      cin
      data_embauche
      date_naissance
      email
      fonction
      matricule
      name
      nombre_denfant
      password
      phoneNumber
      role
      siege_social
      situation_familiale
    }
  }
`;
export const GET_PRIME = gql`
 query Query {
  ShowAllPrime {
    year
    taux
    _id
  }
}
`;

export const GET_REVENU = gql`
query Query {
  ShowAllRevenu {
    somme_deduire
    salaire_min
    salaire_max
    taux
    _id
  }
}
`
