const { ApolloServer, gql } = require("apollo-server-express");
const Prime = require("../../Models/PrimeModel");
const { Query } = require("./SalaireResolver");
module.exports = {
  Query: {
    ShowAllPrime: async () => {
      try {
        return await Prime.find();
      } catch (e) {
        return e;
      }
    },
  },
  Mutation: {},
};
