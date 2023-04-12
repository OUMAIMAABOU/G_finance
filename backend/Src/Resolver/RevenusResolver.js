const ImpotRevenu = require("../../Models/ImpotRevenuModel");
const mongoose = require("mongoose");

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
  Mutation: {
    updateImpotRevenu: async (_, { id, args }) => {
      try {
let {salaire_min, salaire_max,sommeDeduire,taux}=args
console.log(salaire_min, salaire_max,sommeDeduire,taux)
        const UpdatePrime = await ImpotRevenu.findByIdAndUpdate(
          new mongoose.Types.ObjectId(id),
          {salaire_min:salaire_min, salaireMax:salaire_max,somme_deduire:sommeDeduire,taux:taux},
          { new: true }
        );

        console.log(UpdatePrime)
       if(UpdatePrime) return true
       else return false
      } catch (e) {
        throw e;
      }
    },
  }
};
