import { MyContext } from "../../../api/graphql-types/MyContext";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Logger from "../../../loaders/logger";
//import config from "../../../config";
import { invalidLogin } from "./login/error-messages";
import { LoginInput } from "./login/LoginInput";
import { LoginResponse } from "./login/LoginResponse";

const invalidLoginResponse = {
  errors: [
    {
      path: "login",
      message: invalidLogin,
    },
  ],
};

@Resolver()
export class LoginResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return "Hello";
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("data") { usernameOrEmail, password }: LoginInput,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    try {
      Logger.info("username passowrd %o %o", usernameOrEmail, password);
      Logger.info("response from res %o", res);
      return {
        accessToken: "",
      };
    } catch (err) {
      Logger.error("🔥 error: %o", err);
      return invalidLoginResponse;
    }
  }
}
