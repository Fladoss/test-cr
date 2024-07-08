import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type PlaylistTrackCreateInput = {
  position?: number | null;
  playlist?: PlaylistWhereUniqueInput | null;
  track?: TrackWhereUniqueInput | null;
};
