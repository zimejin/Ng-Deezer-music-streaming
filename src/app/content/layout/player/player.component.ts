import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Subscription } from "rxjs";

import { SongsConfigService } from "../../../core/services/songs-config.service";
import { LocalStorageService } from "../../../core/services/local-storage.service";
import { SkinService } from "../../../core/services/skin.service";
import { Config } from "../../../config/config";
import * as Amplitude from "amplitudejs";

@Component({
  selector: "app-player",
  template: `
    <!-- Begin | Audio Player [[ Find at scss/framework/base/audio-player/audio-player.scss ]] -->
    <div id="audioPlayer" [class]="playerClass">
      <!-- Begin | Audio Player Progress -->
      <div id="progress-container">
        <input type="range" class="amplitude-song-slider" />
        <progress
          class="audio-progress audio-progress--played amplitude-song-played-progress"
        ></progress>
        <progress
          class="audio-progress audio-progress--buffered amplitude-buffered-progress"
          value="0"
        ></progress>
      </div>
      <!-- End | Audio Player Progress -->

      <!-- Begin | Audio -->
      <div class="audio">
        <div class="song-image">
          <img
            data-amplitude-song-info="cover_art_url"
            [src]="song?.cover_art_url"
            alt=""
          />
        </div>
        <div class="song-info pl-3">
          <span
            class="song-name d-inline-block text-truncate"
            data-amplitude-song-info="name"
          ></span>
          <span
            class="song-artists d-block text-muted"
            data-amplitude-song-info="artist"
          ></span>
        </div>
      </div>
      <!-- End | Audio -->

      <!-- Begin | Audio Controls -->
      <div class="audio-controls">
        <div class="audio-controls--left d-flex mr-auto">
          <button class="btn btn-icon-only amplitude-repeat">
            <i class="ion-md-sync"></i>
          </button>
        </div>
        <div class="audio-controls--main d-flex">
          <button class="btn btn-icon-only amplitude-prev">
            <i class="ion-md-skip-backward"></i>
          </button>
          <button
            class="btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause"
          >
            <i class="ion-md-play"></i>
            <i class="ion-md-pause"></i>
          </button>
          <button class="btn btn-icon-only amplitude-next">
            <i class="ion-md-skip-forward"></i>
          </button>
        </div>
        <div class="audio-controls--right d-flex ml-auto">
          <button
            class="btn btn-icon-only amplitude-shuffle amplitude-shuffle-off"
          >
            <i class="ion-md-shuffle"></i>
          </button>
        </div>
      </div>
      <!-- End | Audio Controls -->

      <!-- Begin | Audio Info -->
      <div class="audio-info d-flex align-items-center pr-4">
        <span class="mr-4">
          <span class="amplitude-current-minutes"></span>:<span
            class="amplitude-current-seconds"
          ></span>
          / <span class="amplitude-duration-minutes"></span>:<span
            class="amplitude-duration-seconds"
          ></span>
        </span>
        <div class="audio-volume dropdown">
          <button
            class="btn btn-icon-only"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i [class]="volumeIcon"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right volume-dropdown-menu">
            <input
              type="range"
              class="amplitude-volume-slider"
              value="100"
              (change)="changeVolumeIcon($event)"
            />
          </div>
        </div>

        <!-- Song options -->
        <app-song-options
          [icon]="'la-ellipsis-v'"
          [song]="song"
        ></app-song-options>

        <button class="btn btn-icon-only" (click)="openPlaylist()">
          <i class="ion-md-musical-note"></i>
        </button>
      </div>
      <!-- End | Audio Info -->
    </div>
    <!-- End | Audio Player -->
  `,
})
export class PlayerComponent implements OnInit, OnDestroy {
  song: any = {};
  volumeIcon = "ion-md-volume-low";
  showPlaylist = "open-right-sidebar";
  playerClass = "player-primary";

  skinSubscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService,
    private songsConfigService: SongsConfigService,
    private skinService: SkinService
  ) {}

  ngOnInit() {
    this.song = this.songsConfigService.defaultSong;

    Amplitude.init({
      songs: [this.song],
    });

    const themeSkin = this.localStorageService.getThemeSkin();
    if (themeSkin) {
      this.playerClass = "player-" + Config.THEME_CLASSES[themeSkin.player];
    }

    this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
      if (skin) {
        this.playerClass = "player-" + Config.THEME_CLASSES[skin.player];
      }
    });
  }

  changeVolumeIcon(event) {
    const value = event.target.value;
    if (value < 1) {
      this.volumeIcon = "ion-md-volume-mute";
    } else if (value > 0 && value < 70) {
      this.volumeIcon = "ion-md-volume-low";
    } else if (value > 70) {
      this.volumeIcon = "ion-md-volume-high";
    }
  }

  openPlaylist() {
    if (this.document.body.classList.contains(this.showPlaylist)) {
      this.document.body.classList.remove(this.showPlaylist);
    } else {
      this.document.body.classList.add(this.showPlaylist);
    }
  }

  ngOnDestroy() {
    this.skinSubscription.unsubscribe();
  }
}
