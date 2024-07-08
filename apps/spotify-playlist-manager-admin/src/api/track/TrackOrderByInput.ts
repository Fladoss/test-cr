import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  artist?: SortOrder;
  album?: SortOrder;
  duration?: SortOrder;
};
