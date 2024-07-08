import { SortOrder } from "../../util/SortOrder";

export type PlaylistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
};
