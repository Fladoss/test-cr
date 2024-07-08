import * as graphql from "@nestjs/graphql";
import { PlaylistTrackResolverBase } from "./base/playlistTrack.resolver.base";
import { PlaylistTrack } from "./base/PlaylistTrack";
import { PlaylistTrackService } from "./playlistTrack.service";

@graphql.Resolver(() => PlaylistTrack)
export class PlaylistTrackResolver extends PlaylistTrackResolverBase {
  constructor(protected readonly service: PlaylistTrackService) {
    super(service);
  }
}
