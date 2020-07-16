import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserType {
  @Field()
  guid: string;

  @Field({ nullable: true })
  id?: number;

  @Field()
  email: string;

  @Field()
  fullname: string;
}
