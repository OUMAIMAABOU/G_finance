const mongoose = require("mongoose");
// create table user

const ImpotRevenu = new mongoose.Schema(
  {
    salaire_min: {
      type: Number,
      required: true,
    },
    salaire_max: {
      type: Number,
      required: true,
    },
    taux: Number,
    somme_deduire: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("impot_revenus", ImpotRevenu);
