const mongoose = require("mongoose");
// create table user

const salaire = new mongoose.Schema(
  {
    salaire_brut: {
      type: Number,
      required: true,
    },
    date_paie: {
      type: Number,
      required: true,
    },
    salaire_net: Number,
    CNSS:Number,
    AMO:Number,
    CIMR:Number,
    Mutuele:Number,
    frais_pro:Number,
    prime: Number,
    prime_d_anciennete: Number,
    IR_brut: Number,
    IR_net: Number,
    exoneres: Number,
    deduction: Number,    
    charge_familaire: Number,
    nombre_Denfant: Number,
    Salaire_de_base: Number,
    avance_salair: Number,
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("salaires", salaire);
