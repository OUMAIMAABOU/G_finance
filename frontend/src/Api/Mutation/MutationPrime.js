import { gql } from "@apollo/client";

export const PUT = gql`
 mutation Mutation($updatePrimeId: ObjectID!, $taux: Int) {
  UpdatePrime(id: $updatePrimeId, taux: $taux)
}
`;