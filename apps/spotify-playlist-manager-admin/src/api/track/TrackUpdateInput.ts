import { PlaylistTrackUpdateManyWithoutTracksInput } from "./PlaylistTrackUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  title?: string | null;
  artist?: string | null;
  album?: string | null;
  duration?: number | null;
  playlistTracks?: PlaylistTrackUpdateManyWithoutTracksInput;
};
