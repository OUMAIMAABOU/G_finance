
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {
    Date: GraphQLDateTime,
  };
  
  
const authResolver = require('./authResolver');
module.exports = [customScalarResolver,authResolver]