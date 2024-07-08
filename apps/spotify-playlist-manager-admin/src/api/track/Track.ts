import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";

export type Track = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  artist: string | null;
  album: string | null;
  duration: number | null;
  playlistTracks?: Array<PlaylistTrack>;
};
