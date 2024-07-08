import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlaylistTrackTitle } from "../playlistTrack/PlaylistTrackTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
