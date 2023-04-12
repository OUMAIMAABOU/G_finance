import { gql } from "@apollo/client";

export const PUT = gql`
mutation Mutation($input: InputImpotRevenu) {
  updateImpotRevenu(input: $input)
}
`;