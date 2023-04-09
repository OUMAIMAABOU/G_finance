
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {Date: GraphQLDateTime,};
const authResolver = require('./authResolver');
const EmployerResolver =require('./EmployerResolver')
const SalaireResolver =require('./SalaireResolver')
module.exports = [customScalarResolver,authResolver,EmployerResolver,SalaireResolver]