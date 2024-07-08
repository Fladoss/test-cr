import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlaylistList } from "./playlist/PlaylistList";
import { PlaylistCreate } from "./playlist/PlaylistCreate";
import { PlaylistEdit } from "./playlist/PlaylistEdit";
import { PlaylistShow } from "./playlist/PlaylistShow";
import { PlaylistTrackList } from "./playlistTrack/PlaylistTrackList";
import { PlaylistTrackCreate } from "./playlistTrack/PlaylistTrackCreate";
import { PlaylistTrackEdit } from "./playlistTrack/PlaylistTrackEdit";
import { PlaylistTrackShow } from "./playlistTrack/PlaylistTrackShow";
import { TrackList } from "./track/TrackList";
import { TrackCreate } from "./track/TrackCreate";
import { TrackEdit } from "./track/TrackEdit";
import { TrackShow } from "./track/TrackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SpotifyPlaylistManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Playlist"
          list={PlaylistList}
          edit={PlaylistEdit}
          create={PlaylistCreate}
          show={PlaylistShow}
        />
        <Resource
          name="PlaylistTrack"
          list={PlaylistTrackList}
          edit={PlaylistTrackEdit}
          create={PlaylistTrackCreate}
          show={PlaylistTrackShow}
        />
        <Resource
          name="Track"
          list={TrackList}
          edit={TrackEdit}
          create={TrackCreate}
          show={TrackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;