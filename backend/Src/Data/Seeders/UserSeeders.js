const User = require('../../../Models/UserModel');
const UserFactorie = require('../Factories/UserFactories');
User.insertMany(UserFactorie);
console.log('user created');

