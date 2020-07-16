import { ApolloError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../graphql-types/MyContext";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new ApolloError("not authenticated");
  }

  try {
    // const token = authorization?.split("")[1];
    // TODO: verify token
  } catch (err) {
    throw new ApolloError("not authenticated");
  }

  return next();
};
