const { ApolloServer, gql } = require("apollo-server-express");
const Employer = require("../../Models/userModel");
const Role = require("../../Models/RoleModel");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const { sendEmailPassword } = require("../../Utils/sendEmail");
const mongoose = require("mongoose");

module.exports = {
  Query: {
    ShowEmployer: async () => {
      try {
        return await Employer.find();
      } catch (e) {
        return e;
      }
    },
  },
  Mutation: {
    addEmployer: async (_, args) => {
      try {
        const {
          name,
          email,
          cin,
          date_naissance,
          data_embauche,
          situation_familiale,
          nombre_Denfant,
          adress,
          N_CIMR,
          N_CNSS,
          Service,
          fonction,
          siege_social,
          matricule,
          role,
        } = args;
        if (!name || !email) {
          throw new Error("Please enter all fields");
        }
        const roles = await Role.findOne({ role });
        const password = crypto.randomBytes(3).toString("hex");
        const haschedPassword = await bcryptjs.hash(password, 10);
        const employer = Employer.create({
          name,
          email,
          cin,
          date_naissance,
          data_embauche,
          situation_familiale,
          nombre_Denfant,
          adress,
          N_CIMR,
          N_CNSS,
          Service,
          fonction,
          siege_social,
          matricule,
          roleid: roles._id,
          password: haschedPassword,
        });
        if (employer)
        sendEmailPassword(email,name,password);
        return "The Employe was created successfully";
      } catch (error) {
        return error;
      }
    },
    deleteEmployer: async (_, args) => {
      const { id } = args;
      try {
        if (await Employer.findByIdAndDelete(id)) return true;
        else return false;
      } catch (e) {
        return e;
      }
    },
    UpdateEmployer: async (_, { id, input }) => {
      try {
        // Find the employer by ID and update its data
        console.log("input")

        const updatedEmployer = await Employer.findByIdAndUpdate(
          new mongoose.Types.ObjectId(id),
          { ...input },
          { new: true }
        );

        console.log(updatedEmployer)
        return updatedEmployer;
      } catch (e) {
        throw e;
      }
    },
  },
};
