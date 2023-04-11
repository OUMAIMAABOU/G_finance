import { gql } from "@apollo/client";

export const CalculerSalaireMutaiopn = gql`
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
