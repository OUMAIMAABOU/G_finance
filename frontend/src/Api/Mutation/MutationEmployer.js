import { gql } from "@apollo/client";

export const Add = gql`
  mutation AddEmployer(
    $name: String!
    $email: String
    $role: ObjectID
    $cin: String
    $dateNaissance: String
    $dataEmbauche: String
    $situationFamiliale: String
    $adress: String
    $nCimr: String
    $nCnss: String
    $service: String
    $fonction: String
    $siegeSocial: String
    $matricule: String
  ) {
    addEmployer(
      name: $name
      email: $email
      role: $role
      cin: $cin
      date_naissance: $dateNaissance
      data_embauche: $dataEmbauche
      situation_familiale: $situationFamiliale
      adress: $adress
      N_CIMR: $nCimr
      N_CNSS: $nCnss
      Service: $service
      fonction: $fonction
      siege_social: $siegeSocial
      matricule: $matricule
    )
  }
`;
export const DELETE = gql`
  mutation DeleteEmployer($deleteEmployerId: ObjectID!) {
    deleteEmployer(id: $deleteEmployerId)
  }
`;
export const Put = gql`
  mutation UpdateEmployer($updateEmployerId: ObjectID!$input: EmployerInput!) {
    UpdateEmployer(id: $updateEmployerId, input: $input) {
      name
    }
  }
`;
