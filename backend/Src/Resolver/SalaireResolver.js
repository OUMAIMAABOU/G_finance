const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const Prime_anciennete = require("../../Models/PrimeModel");
const Cotisation = require("../../Models/CotisationModel");
const salaire = require("../../Models/SalaireModel");
const mongoose = require("mongoose");
const moment = require('moment');

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
        let {
          id_employe,
          salaire_de_base,
          prime,
          datePaie,
          Salaire_brut,
          exoneres,
          avance_salair,
          Heurs_supplementaire,
        } = args;
        const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
        const yearDifference = moment(new Date()).diff( moment(employe.data_embauche), 'years');
        const Primes = await Prime_anciennete.findOne({year_max: { $gte: yearDifference},year_min:{ $lte: yearDifference} })
        const Cotisations = await Cotisation.findOne()
        let prime_d_anciennete=0
        if(Primes) prime_d_anciennete = (Primes.taux)/100;
        Salaire_brut = salaire_de_base + Heurs_supplementaire + ((salaire_de_base + Heurs_supplementaire)*prime_d_anciennete) + prime;
        const Salaire_brut_imposabel = Salaire_brut - exoneres;
        const deduction =((Salaire_brut*Cotisations.mutuelle)/100) + ((Salaire_brut*Cotisations.cimr)/1000) +((Salaire_brut*Cotisations.amo)/100) +((Salaire_brut*Cotisations.cnss)/100);
        const deductionIR = ((Salaire_brut*Cotisations.frais_prof)/100) + deduction;
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
