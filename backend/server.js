require("dotenv").config();
const { connectionDefinitions } = require("graphql-relay");
const connectDb = require("./Config/config");
const globalError = require('./Middlewares/errorMiddleware');
const { ApolloServer } = require("apollo-server-express");
const schema = require("./src/schema/index");
const resolvers = require("./Src/Resolver/index");
const helmet = require('helmet');
const {limiter} = require('./Utils/Security')
const cors = require("cors");
const express = require("express");
const app = express();

// Use helmet middleware for additional security measures
app.use(helmet())
app.use({ app, path: "/Gfinance" }, limiter);
app.use(cors({ origin: true }));
app.use(express.json());


const StartAppoloServer = async () => {
  const server = new ApolloServer({
    typeDefs: schema,resolvers,
    context: ({ req, res }) => ({ req, res }),
    schemaDirectives: {connection: connectionDefinitions,},
  });
  await server.start();
  server.applyMiddleware({ app, path: "/Gfinance" });
  console.log(`apollo server is running at http://localhost:${port}${server.graphqlPath}`);
};

StartAppoloServer();
app.use(globalError);
const port = process.env.PORT || 8090;
const server = app.listen(port, (err) => {
  (!err)?console.log(`the port ${port} is running`): console.log(err);
  
});



module.exports = app;
