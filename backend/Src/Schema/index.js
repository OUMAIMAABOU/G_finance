const {gql} = require('apollo-server-express');
const authSchema = require('./authSchema')
const EmployerSchema = require('./EmployerSchema')
const salaireSchema=require('./salaireSchema')
const primeSchema=require('./primeShema')
const ImpotRevenu=require('./RevenuSchema')


const baseSchema =  gql`
scalar Date
type Query {
  _: Boolean
}
type Mutation {
  _: Boolean
}
type Subscription {
  _: Boolean
}
`;

module.exports =  [baseSchema, authSchema,EmployerSchema,salaireSchema,primeSchema,ImpotRevenu]