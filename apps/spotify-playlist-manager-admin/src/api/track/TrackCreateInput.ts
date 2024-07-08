import { PlaylistTrackCreateNestedManyWithoutTracksInput } from "./PlaylistTrackCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  title?: string | null;
  artist?: string | null;
  album?: string | null;
  duration?: number | null;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutTracksInput;
};
