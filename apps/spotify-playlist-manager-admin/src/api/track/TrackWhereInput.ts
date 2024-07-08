import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";

export type TrackWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  artist?: StringNullableFilter;
  album?: StringNullableFilter;
  duration?: IntNullableFilter;
  playlistTracks?: PlaylistTrackListRelationFilter;
};
