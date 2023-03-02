const { ApolloServer, gql } = require("apollo-server-express");
const User = require("../../Models/userModel");
const Role = require("../../Models/RoleModel");
const bcryptjs = require("bcryptjs");
const gererateAccessToken = require("../../Utils/generateToken");
const localstorage = require("local-storage");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../../Utils/sendEmail");

module.exports = {
  Query: {
    hello: () => "hello world",
  },
  Mutation: {
    signup: async (_, args) => {
      try {
        const { name, email, password, role } = args;
        const roles = await Role.findOne({ role });
        console.log(roles);
        const salt = await bcryptjs.genSalt(10);
        const haschedPassword = await bcryptjs.hash(password, salt);
        const user = await User.create({
          name,
          email,
          password: haschedPassword,
          roleid: role,
        });
        return user;
      } catch (error) {
        throw error;
      }
    },
    role: async (_, args) => {
      try {
        const { role } = args;
        const user = await Role.create({
          role,
        });
        return user;
      } catch (error) {
        throw error;
      }
    },
    login: async (_, args) => {
      try {
        const { email, password } = args;
        if (!email || !password) {
          throw new Error("Please enter all fields");
        }
        const users = await User.findOne({ email });
        const payload = {
          userId: users._id,
          username: users.name,
        };
        if (users) {
          if (await bcryptjs.compare(password, users.password)) {
            const token = localstorage(
              "token",
              gererateAccessToken({ payload }, "120m")
            );
            console.log(gererateAccessToken({ payload }, "120m"));
            return users;
          } else {
            throw new Error("Invalid password");
          }
        } else {
          throw new Error("User not exist");
        }
      } catch (error) {
        throw error;
      }
    },
    foregetPassword: async (_, args) => {
      try {
        const { email } = args;
        if (!email) {
          throw new Error("email is required");
        }
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not exist");
        } else {
          localstorage(
            "verifitoken",
            gererateAccessToken({ id: user._id }, "10m")
          );
          sendEmail(
            user.email,
            localstorage("verifitoken"),
            user.name,
            "to reset your password",
            "/restpassword/"
          );
          return "verifies votre email";
        }
      } catch (error) {
        throw error;
      }
    },

    resetPassword: async (_, args, context) => {
      try {
        const { password, token } = args;
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        if (!decodedToken) throw new Error("error toke");
        else {
          await User.updateOne(
            { _id: decodedToken._id },
            {
              password: bcryptjs.hashSync(password, 10),
            }
          );
          return "password modifier";
        }
      } catch (error) {
        throw error;
      }
    },
  },
};
