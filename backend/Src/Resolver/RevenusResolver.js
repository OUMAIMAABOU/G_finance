const { ApolloServer, gql } = require("apollo-server-express");
const ImpotRevenu = require("../../Models/ImpotRevenuModel");
const { Query } = require("./SalaireResolver");
module.exports = {
  Query: {
    ShowAllRevenu: async () => {
      try {
        return await ImpotRevenu.find();
      } catch (e) {
        return e;
      }
    },
  },

};
