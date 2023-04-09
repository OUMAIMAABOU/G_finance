const bcryptjs = require("bcryptjs");
// create user accout
const hash =bcryptjs.hashSync("admin",10)
const Users = [
  {
    name: "OUMAIMA ABOU EL HAITAM",
    email: "Admin@gmail.com",
    password: hash,
    cin:"C12345",
    data_embauche:"2010-03-01",
    matricule:"M12345",
    phoneNumber:"0612345678",
    adress:"el moustakbal 01 Rabat",
    situation_familiale:"celibataire",
    N_CNSS:"CN12345",
    N_CIMR:"CI12345",
    roleid:"6432f8f2c9c91e91dbf6dc90"

  },
];

module.exports = Users;