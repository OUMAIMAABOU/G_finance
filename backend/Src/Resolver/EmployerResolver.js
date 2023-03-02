const { ApolloServer, gql } = require("apollo-server-express");
const User = require("../../Models/userModel");
const bycrpt = require("bcryptjs");
// const crypto = require("crypto");

// const { sendEmail, forgetPassword } = require('../../Utils/sendEmail');

module.exports = {
  Query: {
    hello: () => "hello world",
  },
  Mutation: {
    AddEmployer: async (_, args) => {
      try {
        const { name, email, password } = args;
        if (!name || !email) {
          throw new Error("Please enter all fields");
        }
        // body.password=await bcryptjs.hash(body.password,10)
        // body.token=crypto.randomBytes(32).toString("hex")
        // body.roleid=findrole._id
        await User.create({ name: name, email: email });
      } catch (error) {
        throw error;
      }
    },
   

  },
};
