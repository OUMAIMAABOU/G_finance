const mongoose = require("mongoose");
// create table prime
const prime = new mongoose.Schema(
  {

    year_max: {
      type: Number,
      required: true,
    },
    year_min: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    taux: {
      type: Number,
      required: true,
    },
}
);

module.exports = mongoose.model("primes", prime);
