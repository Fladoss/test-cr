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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { PlaylistTrackUpdateManyWithoutTracksInput } from "./PlaylistTrackUpdateManyWithoutTracksInput";
import { Type } from "class-transformer";

@InputType()
class TrackUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  artist?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  album?: string | null;

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
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: () => PlaylistTrackUpdateManyWithoutTracksInput,
  })
  @ValidateNested()
  @Type(() => PlaylistTrackUpdateManyWithoutTracksInput)
  @IsOptional()
  @Field(() => PlaylistTrackUpdateManyWithoutTracksInput, {
    nullable: true,
  })
  playlistTracks?: PlaylistTrackUpdateManyWithoutTracksInput;
}

export { TrackUpdateInput as TrackUpdateInput };