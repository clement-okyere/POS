import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../../graphql-types/FieldError";

@ObjectType()
export class LoginResponse {
  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => Boolean, { defaultValue: false })
  shouldUpdatePassword?: boolean;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
