const { ApolloServer, gql } = require("apollo-server-express");
const Prime = require("../../Models/PrimeModel");
const { Query } = require("./SalaireResolver");
const mongoose = require("mongoose");

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
  Mutation: {
    UpdatePrime: async (_, { id, taux }) => {
      try {
        const UpdatePrime = await Prime.findByIdAndUpdate(
          new mongoose.Types.ObjectId(id),
          {taux},
          { new: true }
        );
       if(UpdatePrime) return true
       else return false
      } catch (e) {
        throw e;
      }
    },
  }
};
