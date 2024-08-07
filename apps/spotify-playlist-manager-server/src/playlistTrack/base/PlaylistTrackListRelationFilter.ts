/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlaylistTrackWhereInput } from "./PlaylistTrackWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlaylistTrackListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlaylistTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => PlaylistTrackWhereInput)
  @IsOptional()
  @Field(() => PlaylistTrackWhereInput, {
    nullable: true,
  })
  every?: PlaylistTrackWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlaylistTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => PlaylistTrackWhereInput)
  @IsOptional()
  @Field(() => PlaylistTrackWhereInput, {
    nullable: true,
  })
  some?: PlaylistTrackWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlaylistTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => PlaylistTrackWhereInput)
  @IsOptional()
  @Field(() => PlaylistTrackWhereInput, {
    nullable: true,
  })
  none?: PlaylistTrackWhereInput;
}
export { PlaylistTrackListRelationFilter as PlaylistTrackListRelationFilter };
