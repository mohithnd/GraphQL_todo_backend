import mongoose from "mongoose";
import serverConfig from "./config/serverConfig";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs/index";
import resolvers from "./resolvers/index";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

async function start() {
  await mongoose.connect(serverConfig.DB_URL);
  console.log("Coonected To MongoDB");
  const info = await server.listen();
  console.log(`GraphQL Server Is Up At URL: ${info.url}`);
}

start();
