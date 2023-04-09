const bcryptjs = require("bcryptjs");
// create user accout
const hash =bcryptjs.hashSync("admin",10)
const Prime = [
  {
    MaxYear: 5,
    MinYear: 2,
    taux: 5
  },
  {
    MaxYear: 12,
    MinYear: 5,
    taux: 10,
  },
  {
    MaxYear: 20,
    MinYear: 12,
    taux: 15,
  }, 
  {
    MaxYear: 25,
    MinYear: 20,
    taux: 20,
  },
  {
    MaxYear: 100,
    MinYear: 25,
    taux: 25,
  },
];

module.exports = Prime;