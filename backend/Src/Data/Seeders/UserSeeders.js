require('dotenv').config();
const db = require('../../../Config/config');
const User = require('../../../Models/UserModel');
const UserFactorie = require('../Factories/UserFactories');
User.insertMany(UserFactorie);
console.log('user created');

