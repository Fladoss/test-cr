import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";
import { TRACK_TITLE_FIELD } from "../track/TrackTitle";

export const PlaylistTrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="position" source="position" />
        <ReferenceField
          label="Playlist"
          source="playlist.id"
          reference="Playlist"
        >
          <TextField source={PLAYLIST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Track" source="track.id" reference="Track">
          <TextField source={TRACK_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
