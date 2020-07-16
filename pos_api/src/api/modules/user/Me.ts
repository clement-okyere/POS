import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../api/graphql-types/MyContext";
//import config from "../../../config";
import { MeResponse } from "./me/MeResponse";

@Resolver()
export class MeResolver {
  @Query(() => MeResponse)
  async me(@Ctx() context: MyContext): Promise<MeResponse> {
    const authorization = context.req.headers.authorization;
    if (!authorization) {
      return {
        errors: [
          {
            path: "me",
            message: "Authorization header not passed",
          },
        ],
      };
    }

    try {
      return {
        user_type: {
          email: "",
          fullname: "",
          guid: "",
          id: 1,
        },
      };
    } catch (error) {
      return {
        errors: [
          {
            path: "me",
            message: error,
          },
        ],
      };
    }
  }
}
