const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const Cotisation = require("../../Models/CotisationModel");
const Salaire = require("../../Models/SalaireModel");
const mongoose = require("mongoose");
const {verifyToken} =require('../../Middlewares/AuthMiddlewares')
const {SalaireBrutFn,deductionfn,ImpotRevenuFn,PrimeAncienneteFn,IrNetFn} =require('../../Utils/CalculaireSalaire')
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
        let {id_employe,salaire_de_base,prime,Salaire_brut,exoneres,avance_salair,Heurs_supplementaire} = args;
        const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
        const Cotisations = await Cotisation.findOne()
        Salaire_brut= await SalaireBrutFn(salaire_de_base, Heurs_supplementaire, prime,id_employe)
        const Salaire_brut_imposabel = Salaire_brut + exoneres;
        const deductionIR = ((Salaire_brut*Cotisations.frais_prof)/100) + await deductionfn(Salaire_brut);
        const Salaire_net_imposabel = Salaire_brut_imposabel - deductionIR;
        let ir_brut = await ImpotRevenuFn(Salaire_net_imposabel)
        let ir_net = await IrNetFn(ir_brut,id_employe)
        const  salaire_net=Salaire_brut_imposabel - (await deductionfn(Salaire_brut) + ir_brut + avance_salair);
        console.log(salaire_net,new Date())
        const date=new Date()
        let addsalaire = await  Salaire.create({
          salaire_brut:Salaire_brut,
          date_paie:date,
          salaire_net: salaire_net,
          CNSS:((Salaire_brut*Cotisations.cnss)/100),
          AMO:((Salaire_brut*Cotisations.amo)/100),
          CIMR:((Salaire_brut*Cotisations.cimr)/100),
          Mutuele:((Salaire_brut*Cotisations.mutuelle)/100),
          frais_pro:((Salaire_brut*Cotisations.frais_prof)/100), 
          prime_d_anciennete: await PrimeAncienneteFn(id_employe), 
          IR_brut: ir_brut,IR_net: ir_net, exoneres: exoneres,
          deduction: salaire_de_base * (await deductionfn(Salaire_brut)),
          nombre_Denfant: employe.nombre_Denfant,
          Salaire_de_base: salaire_de_base, 
          avance_salair: avance_salair,prime: prime, 
          userid:  new mongoose.Types.ObjectId(id_employe),
        });
       if(addsalaire) return 1
       else return 0
      } catch (error) {
        return error;
      }
    },
  
 
//     calculaireSalaireBrut: async (_, args) => {
//       try {
//         let {id_employe,Salaire_brut,exoneres,avance_salair} = args;
//         const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
//         const Cotisations = await Cotisation.findOne()
//         const Salaire_brut_imposabel = Salaire_brut + exoneres;
//         const deductionIR = ((Salaire_brut*Cotisations.frais_prof)/100) + await deductionfn(Salaire_brut);
//         const Salaire_net_imposabel = Salaire_brut_imposabel - deductionIR;
//         let ir_brut = await ImpotRevenuFn(Salaire_net_imposabel)
//         let ir_net = await IrNetFn(ir_brut,id_employe)
//         const  salaire_net=Salaire_brut_imposabel - (await deductionfn(Salaire_brut) + ir_brut + avance_salair);
// console.log(salaire_net)
//         let addsalaire = await  Salaire.create({
//           salaire_brut:Salaire_brut,
//           date_paie:new Date(),
//           salaire_net: salaire_net,
//           CNSS:((Salaire_brut*Cotisations.cnss)/100),
//           AMO:((Salaire_brut*Cotisations.amo)/100),
//           CIMR:((Salaire_brut*Cotisations.cimr)/100),
//           Mutuele:((Salaire_brut*Cotisations.mutuelle)/100),
//           frais_pro:((Salaire_brut*Cotisations.frais_prof)/100), 
//           prime_d_anciennete: await PrimeAncienneteFn(id_employe), 
//           IR_brut: ir_brut,IR_net: ir_net, exoneres: exoneres,
//           deduction: salaire_de_base * (await deductionfn(Salaire_brut)),
//           nombre_Denfant: employe.nombre_Denfant,
//           Salaire_de_base: salaire_de_base, 
//           avance_salair: avance_salair,prime: prime, 
//           userid:  new mongoose.Types.ObjectId(id_employe),
//         });
//         console.log(addsalaire)
//        if(addsalaire) return addsalaire
//        else return 0
//       } catch (error) {
//         return error;
//       }
//     },

    UpdateEmployer: async (_, { id, input }) => {
      try {
        // Find the employer by ID and update its data

      } catch (e) {
        throw e;
      }
    },
  },
};
