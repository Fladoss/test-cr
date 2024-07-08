/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlaylistTrackWhereUniqueInput } from "../../playlistTrack/base/PlaylistTrackWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlaylistTrackUpdateManyWithoutPlaylistsInput {
  @Field(() => [PlaylistTrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistTrackWhereUniqueInput],
  })
  connect?: Array<PlaylistTrackWhereUniqueInput>;

  @Field(() => [PlaylistTrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistTrackWhereUniqueInput],
  })
  disconnect?: Array<PlaylistTrackWhereUniqueInput>;

  @Field(() => [PlaylistTrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistTrackWhereUniqueInput],
  })
  set?: Array<PlaylistTrackWhereUniqueInput>;
}

export { PlaylistTrackUpdateManyWithoutPlaylistsInput as PlaylistTrackUpdateManyWithoutPlaylistsInput };
