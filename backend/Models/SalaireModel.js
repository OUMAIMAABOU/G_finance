const mongoose = require("mongoose");
// create table user

const salaire = new mongoose.Schema(
  {
    salaire_bruit: {
      type: Number,
      required: true,
    },
    date_paie: {
      type: Number,
      required: true,
    },
    salaire_net: Number,
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("salaires", salaire);
