import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type PlaylistTrackWhereInput = {
  id?: StringFilter;
  position?: IntNullableFilter;
  playlist?: PlaylistWhereUniqueInput;
  track?: TrackWhereUniqueInput;
};
