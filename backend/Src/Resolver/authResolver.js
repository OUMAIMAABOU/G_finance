const { ApolloServer, gql,ApolloError} = require("apollo-server-express");
const User = require("../../Models/userModel");
const Role = require("../../Models/RoleModel");
const bcryptjs = require("bcryptjs");
const gererateAccessToken = require("../../Utils/generateToken");
const localstorage = require("local-storage");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../../Utils/sendEmail");
const mongoose = require("mongoose");

module.exports = {

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
        if (!email || !password) throw new Error("Please enter all fields");
        // Find user by email
        const users = await User.findOne({ email });
        const roles = await Role.findById(new mongoose.Types.ObjectId(users.roleid) );
        const payload = { userId: users._id, username: users.name , role: roles.role};
        if (users) {
          // Check if password is correct
          if (await bcryptjs.compare(password, users.password)) {
            // Generate JWT token
            const token = gererateAccessToken({ payload }, "2H");
            localstorage("token", gererateAccessToken({ payload }, "2H"));
            // Return token
            return token;
          } else throw new Error("Invalid password");
        } else throw new Error("User not exist");
      } catch (error) {
        throw error;
      }
    },
    foregetPassword: async (_, args) => {
      try {
        const { email } = args;
        if (!email) throw new Error("email is required");
          // Find user by email
        const user = await User.findOne({ email });
        if (!user) throw new Error("User not exist");
        else {
          // gererate token to get user ID
          localstorage(
            "verifitoken",
            gererateAccessToken({ id: user._id }, "10m")
          );
          // Send reset token to user via email
          sendEmail( user.email,localstorage("verifitoken"),user.name,"to reset your password", "/restpassword/");
          return "verifies votre email";
        }
      } catch (error) {
        throw error;
      }
    },

    resetPassword: async (_, args) => {
      try {
        const { password, token } = args;
        // Decode token to get user ID
        console.log(token)
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        if (!decodedToken) throw new Error("error toke");
        if (!password) throw new Error("Password is required");
        else {
          // Find user by ID and update password
          await User.updateOne(
            { _id: decodedToken._id },
            { password: bcryptjs.hashSync(password, 10) }
          );
          return "password modifier";
        }
      } catch (error) {
        throw error;
      }
    },

    verifierToken: async (_, token,context) => {
      try {
        const decodedToken = jwt.verify(token.token, process.env.ACCESS_TOKEN);
        if(decodedToken){
           const users = await User.findById(decodedToken.payload.userId);
        if(users)  { 
          context.status = 200;
          return decodedToken.payload.username
         }
        else  {
          context.status = 400;
          return "can't find this user"
        } 
        }else{
          context.status = 400;
          throw new Error("token invalid")
        }
       
      } catch (error) {
        context.status = 400;
        throw new Error(error)

      }
    },
  },
};
