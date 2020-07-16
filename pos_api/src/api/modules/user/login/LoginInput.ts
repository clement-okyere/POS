import { Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  @Field()
  @Length(1, 255)
  usernameOrEmail: string;

  @Field()
  @MinLength(6)
  password: string;
}
