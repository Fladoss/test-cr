import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";

export type PlaylistWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  playlistTracks?: PlaylistTrackListRelationFilter;
};
