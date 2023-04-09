require("dotenv").config();
const { connectionDefinitions } = require("graphql-relay");
const connectDb = require("./Config/config");
// const apiError = require('./Utils/ErrorUtils')
// const globalError = require('./Middlewares/errorMiddleware')
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

// app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// app.use(errRoute)

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
// Global error handling middleware
// app.use(globalError);
const port = process.env.PORT || 8090;
const server = app.listen(port, (err) => {
  (!err)?console.log(`the port ${port} is running`): console.log(err);
  
});

// Handle errors outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("Shutting down....");
    process.exit(1);
  });
});

module.exports = app;
