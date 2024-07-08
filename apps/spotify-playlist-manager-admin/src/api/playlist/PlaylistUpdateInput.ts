import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistTrackUpdateManyWithoutPlaylistsInput } from "./PlaylistTrackUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  playlistTracks?: PlaylistTrackUpdateManyWithoutPlaylistsInput;
};
