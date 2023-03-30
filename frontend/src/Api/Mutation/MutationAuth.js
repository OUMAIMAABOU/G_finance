import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
`;
export const VERIFIER_TOKEN = gql`
 mutation VerifierToken($token: String!) {
  verifierToken(token: $token)
}
`;