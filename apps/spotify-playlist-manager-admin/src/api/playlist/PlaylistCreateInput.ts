import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistTrackCreateNestedManyWithoutPlaylistsInput } from "./PlaylistTrackCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutPlaylistsInput;
};
