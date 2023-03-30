const mongoose = require("mongoose");
// create table user

const prime = new mongoose.Schema(
  {
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
