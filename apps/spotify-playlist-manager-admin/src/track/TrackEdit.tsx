import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlaylistTrackTitle } from "../playlistTrack/PlaylistTrackTitle";

export const TrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="artist" source="artist" />
        <TextInput label="album" source="album" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceArrayInput
          source="playlistTracks"
          reference="PlaylistTrack"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlaylistTrackTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
