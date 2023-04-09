const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const salaire = require("../../Models/SalaireModel");
const mongoose = require("mongoose");

module.exports = {
  // Query: {
  //   ShowEmployer: async () => {
  //     try {
  //       return await Employer.find();
  //     } catch (e) {
  //       return e;
  //     }
  //   },
  // },
  Mutation: {
    calculaireSalaire: async (_, args) => {
      try {
        const {
          id_employe,
          salaire_de_base,
          prime_d_anciennete,
          prime,
          datePaie,
          Salaire_brut,
          exoneres,
          avance_salair,
          Heurs_supplementaire,
          frais_pro,
          Mutuele,
          CIMR,
          AMO,
          CNSS,
        } = args;
        const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
        console.log(employe);
        prime_d_anciennete = 111;
        Salaire_brut =
          salaire_de_base + Heurs_supplementaire + prime_d_anciennete + prime;
        const Salaire_brut_imposabel = Salaire_brut - exoneres;
        const deductionIR = frais_pro + Mutuele + CIMR + AMO + CNSS;
        const deduction = Mutuele + CIMR + AMO + CNSS;
        const Salaire_net_imposabel = Salaire_brut_imposabel - deductionIR;
        ir = Salaire_net_imposabel * 20 * employe;
        salaire_net = Salaire_brut - (deduction + ir + avance_salair);
      } catch (error) {
        return error;
      }
    },

    // UpdateEmployer: async (_, { id, input }) => {
    //   try {
    //     // Find the employer by ID and update its data

    //   } catch (e) {
    //     throw e;
    //   }
    // },
  },
};
