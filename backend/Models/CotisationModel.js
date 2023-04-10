const mongoose = require("mongoose");
// create table user

const cotisation = new mongoose.Schema(
  {
    amo: {
      type: Number,
    },
    cnss: {
      type: Number,
    },
    cimr: {
      type: Number,
    },
    mutuelle: {
      type: Number,
    },
    frais_prof: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cotisations", cotisation);
//  cnss 4,48,amo 2,26%,cimr 6%,frais professionnel 20%
