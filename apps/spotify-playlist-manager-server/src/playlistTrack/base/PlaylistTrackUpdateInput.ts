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
import { IsInt, Min, Max, IsOptional, ValidateNested } from "class-validator";
import { PlaylistWhereUniqueInput } from "../../playlist/base/PlaylistWhereUniqueInput";
import { Type } from "class-transformer";
import { TrackWhereUniqueInput } from "../../track/base/TrackWhereUniqueInput";

@InputType()
class PlaylistTrackUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  position?: number | null;

  @ApiProperty({
    required: false,
    type: () => PlaylistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlaylistWhereUniqueInput)
  @IsOptional()
  @Field(() => PlaylistWhereUniqueInput, {
    nullable: true,
  })
  playlist?: PlaylistWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TrackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrackWhereUniqueInput)
  @IsOptional()
  @Field(() => TrackWhereUniqueInput, {
    nullable: true,
  })
  track?: TrackWhereUniqueInput | null;
}

export { PlaylistTrackUpdateInput as PlaylistTrackUpdateInput };