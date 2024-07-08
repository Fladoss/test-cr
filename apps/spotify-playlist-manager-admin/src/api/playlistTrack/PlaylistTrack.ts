import { Playlist } from "../playlist/Playlist";
import { Track } from "../track/Track";

export type PlaylistTrack = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  position: number | null;
  playlist?: Playlist | null;
  track?: Track | null;
};
