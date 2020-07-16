import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { MyContext } from "../../pos_api/src/api/graphql-types/MyContext";
import { createSchema } from "../src/api/utils/create-schema";
import config from "./config";
import Logger from "./loaders/logger";

const main = async (): Promise<void> => {
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({
      req,
      res,
    }),
  });

  const app = express();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(config.get("port"), () => {
    Logger.info(
      `🚀 Server started on http://localhost:${config.get("port")}/graphql 🚀 `
    );
  });
};

main().catch((err) => Logger.error(err));
