import { SortOrder } from "../../util/SortOrder";

export type PlaylistTrackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  position?: SortOrder;
  playlistId?: SortOrder;
  trackId?: SortOrder;
};
