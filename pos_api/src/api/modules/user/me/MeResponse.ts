import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../../../api/graphql-types/FieldError";
import { UserType } from "../../../graphql-types/UserType";

@ObjectType()
export class MeResponse {
  @Field(() => UserType, { nullable: true })
  user_type?: UserType;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
