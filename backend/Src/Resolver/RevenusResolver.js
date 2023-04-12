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
    updateImpotRevenu: async (_,  {input} ) => {
      try {
        const ImpotRevenus = await ImpotRevenu.findByIdAndUpdate(
          new mongoose.Types.ObjectId(input._id),
          {...input},
          { new: true }
        );

       if(ImpotRevenus) return true
       else return false
      } catch (e) {
        throw e;
      }
    },
  }
};
