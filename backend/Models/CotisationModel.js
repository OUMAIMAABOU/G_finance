const mongoose = require("mongoose");
// create table user

const cotisation = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    taux: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cotisations", cotisation);
//  cnss 4,48,amo 2,26%,cimr 6%,frais professionnel 20%
