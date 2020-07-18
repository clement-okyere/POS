import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { LoginResolver } from "../modules/user/Login";
import { MeResolver } from "../modules/user/Me";
import { HelloResolver } from "../modules/hello/Hello";

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [LoginResolver, MeResolver, HelloResolver],
  });
