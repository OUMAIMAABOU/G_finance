import { gql } from "@apollo/client";

export const CalculerSalaireMutaion = gql`
  mutation CalculaireSalaire(
    $idEmploye: ObjectID!
    $salaireDeBase: Float!
    $prime: Float!
    $exoneres: Float!
    $avanceSalair: Float!
    $heursSupplementaire: Float!
  ) {
    calculaireSalaire(
      id_employe: $idEmploye
      salaire_de_base: $salaireDeBase
      prime: $prime
      exoneres: $exoneres
      avance_salair: $avanceSalair
      Heurs_supplementaire: $heursSupplementaire
    )
  }
`;

export const CalculaireSalaire_Brut = gql`
    mutation Mutation($idEmploye: ObjectID!, $exoneres: Float!, $avanceSalair: Float!, $salaireBrut: Float, $prime: Float) {
    calculaireSalaireBrut(id_employe: $idEmploye, exoneres: $exoneres, avance_salair: $avanceSalair, Salaire_brut: $salaireBrut, prime: $prime)
  }
`;
