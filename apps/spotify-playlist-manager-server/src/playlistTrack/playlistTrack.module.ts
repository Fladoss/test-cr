import { Module } from "@nestjs/common";
import { PlaylistTrackModuleBase } from "./base/playlistTrack.module.base";
import { PlaylistTrackService } from "./playlistTrack.service";
import { PlaylistTrackController } from "./playlistTrack.controller";
import { PlaylistTrackResolver } from "./playlistTrack.resolver";

@Module({
  imports: [PlaylistTrackModuleBase],
  controllers: [PlaylistTrackController],
  providers: [PlaylistTrackService, PlaylistTrackResolver],
  exports: [PlaylistTrackService],
})
export class PlaylistTrackModule {}
