/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlaylistWhereInput } from "./PlaylistWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PlaylistCountArgs {
  @ApiProperty({
    required: false,
    type: () => PlaylistWhereInput,
  })
  @Field(() => PlaylistWhereInput, { nullable: true })
  @Type(() => PlaylistWhereInput)
  where?: PlaylistWhereInput;
}

export { PlaylistCountArgs as PlaylistCountArgs };