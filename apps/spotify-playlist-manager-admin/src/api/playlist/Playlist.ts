import { User } from "../user/User";
import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";

export type Playlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  user?: User | null;
  playlistTracks?: Array<PlaylistTrack>;
};
