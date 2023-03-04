
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {Date: GraphQLDateTime,};
const authResolver = require('./authResolver');
const EmployerResolver =require('./EmployerResolver')
module.exports = [customScalarResolver,authResolver,EmployerResolver]