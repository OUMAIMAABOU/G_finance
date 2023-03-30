const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const salaire = require('../../Models/SalaireModel')
const mongoose = require("mongoose");

module.exports = {
  Query: {
    ShowEmployer: async () => {
      try {
        return await Employer.find();
      } catch (e) {
        return e;
      }
    },
  },
  Mutation: {
    addEmployer: async (_, args) => {
      try {
        const {employe,cotisation,salaire_brut,majoration,datePaie,salaire_net,IR,}=args

      } catch (error) {
        return error;
      }
    },
 
    UpdateEmployer: async (_, { id, input }) => {
      try {
        // Find the employer by ID and update its data
       
      } catch (e) {
        throw e;
      }
    },
  },
};
