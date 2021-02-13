import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";

import { PlaylistConfigService } from "../../../../core/services/playlist-config.service";
import { SongsConfigService } from "../../../../core/services/songs-config.service";

@Component({
  selector: "app-aside-right",
  template: `
    <div class="right-sidebar-header">
      {{ playlist.name ? playlist.name : "Playlist Name" }}
    </div>
    <perfect-scrollbar class="right-sidebar-body">
      <ul
        class="list-group list-group-flush song-list"
        *ngIf="playlist.songs; else noDataFound"
      >
        <!-- Begin | Custom List Item -->
        <li
          class="custom-list--item list-group-item"
          *ngFor="let song of playlist.songs; let i = index"
        >
          <app-song-list-view
            [songNumber]="i + 1"
            [song]="song"
            [icon]="'la-ellipsis-h'"
            [playlist]="playlist"
            [songIndex]="i"
          >
          </app-song-list-view>
        </li>
        <!-- End | Custom List Item -->
      </ul>
      <ng-template #noDataFound></ng-template>
    </perfect-scrollbar>
  `,
})
export class AsideRightComponent implements OnInit, OnDestroy {
  @HostBinding("id") id = "rightSidebar";

  playlist: any = {};
  private playlistSubscription;

  constructor(
    private playlistConfigService: PlaylistConfigService,
    private songsConfigService: SongsConfigService
  ) {}

  ngOnInit() {
    this.setDefaultPlaylist();
    this.playlistSubscription = this.playlistConfigService.currentPlaylist.subscribe(
      (playlist) => {
        this.playlist = playlist;
      }
    );
  }

  async setDefaultPlaylist() {
    this.playlist = {
      id: 1,
      name: "Listen Special",
      cover_url: "./assets/images/background/horizontal/1.jpg",
      songs: await this.songsConfigService.songsList.toPromise(),
    };
  }

  ngOnDestroy() {
    this.playlistSubscription.unsubscribe();
  }
}
