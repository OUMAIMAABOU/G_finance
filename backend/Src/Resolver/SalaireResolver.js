const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const Prime_anciennete = require("../../Models/PrimeModel");
const Cotisation = require("../../Models/CotisationModel");
const salaire = require("../../Models/SalaireModel");
const IR = require("../../Models/ImpotRevenuModel");
const mongoose = require("mongoose");
const moment = require('moment');
const {SalaireBrutFn,deductionfn,ImpotRevenuFn} =require('../../Utils/CalculaireSalaire')
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
        let {id_employe,salaire_de_base,prime,datePaie,Salaire_brut,exoneres,avance_salair,Heurs_supplementaire} = args;
        const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
        const Cotisations = await Cotisation.findOne()
        Salaire_brut= await SalaireBrutFn(salaire_de_base, Heurs_supplementaire, prime,id_employe)
        const Salaire_brut_imposabel = Salaire_brut - exoneres;
        const deductionIR = ((Salaire_brut*Cotisations.frais_prof)/100) + await deductionfn(Salaire_brut);
        const Salaire_net_imposabel = Salaire_brut_imposabel - deductionIR;
        let ir = await ImpotRevenuFn(Salaire_net_imposabel)
       return  Salaire_brut - (await deductionfn(Salaire_brut) + ir + avance_salair);
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
