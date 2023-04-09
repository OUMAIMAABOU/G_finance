const Prime = require('../../../Models/PrimeModel');
const PrimeFactorie = require('../factories/PrimeFactories');
Prime.insertMany(PrimeFactorie);
console.log('prime adding successfully');

