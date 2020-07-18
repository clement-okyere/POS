import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async recipes() {
    return "Hello world";
  }
}
