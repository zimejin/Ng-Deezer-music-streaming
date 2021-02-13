import { AfterViewInit, Component, OnInit } from "@angular/core";

import { SongsConfigService } from "../../../../core/services/songs-config.service";
import { LoadingService } from "../../../../core/services/loading.service";
import { ArtistsConfigService } from "../../../../core/services/artists-config.service";
import { PlaylistConfigService } from "../../../../core/services/playlist-config.service";
import { RadioConfigService } from "../../../../core/services/radio-config.service";
import { GenresConfigService } from "../../../../core/services/genres-config.service";
import { EventsConfigService } from "../../../../core/services/events-config.service";
import { DeezerService } from "src/app/core/services/deezer-service";

@Component({
  selector: "app-home",
  template: `
    <!-- Page Banner [[ Find at scss/base/core.scss ]] -->
    <div class="banner bg-home"></div>

    <!-- Begin | Main Container [[ Find at scss/base/core.scss ]] -->
    <div class="main-container">
      <!-- Top Charts -->
      <app-section
        *ngIf="topCharts"
        [section]="topDeezerCharts"
        [carouselButtonPositionClass]="carouselArrowPosClass3"
        [primaryCard]="true"
        [showImageOptions]="true"
      >
      </app-section>

      <!-- New Release -->
      <app-section
        *ngIf="newRelease"
        [section]="newRelease"
        [carouselButtonPositionClass]="carouselArrowPosClass3"
        [primaryCard]="true"
        [showImageOptions]="true"
      >
      </app-section>

      <!-- Artists -->
      <app-section
        *ngIf="deezerTopartists"
        [section]="deezerTopartists"
        [carouselButtonPositionClass]="carouselArrowPosClass2"
        [imageCard]="true"
        [artistRouteLink]="true"
      >
      </app-section>

      <!-- Playlist -->
      <app-section
        *ngIf="playlist"
        [section]="playlist"
        [carouselButtonPositionClass]="carouselArrowPosClass1"
        [secondaryCard]="true"
        [fourSlideCarousel]="true"
      >
      </app-section>

      <!-- Retro -->
      <app-section
        *ngIf="retro"
        [section]="retro"
        [carouselButtonPositionClass]="carouselArrowPosClass3"
        [primaryCard]="true"
        [showImageOptions]="true"
      >
      </app-section>

      <!-- Radio -->
      <app-section
        *ngIf="radio"
        [section]="radio"
        [carouselButtonPositionClass]="carouselArrowPosClass2"
        [imageCard]="true"
      >
      </app-section>

      <!-- Genres -->
      <app-section
        *ngIf="genres"
        [section]="genres"
        [carouselButtonPositionClass]="carouselArrowPosClass1"
        [secondaryCard]="true"
      >
      </app-section>
    </div>
    <!-- End | Main Container -->
  `,
})
export class HomeComponent implements OnInit, AfterViewInit {
  carouselArrowPosClass1 = "arrow-pos-1";
  carouselArrowPosClass2 = "arrow-pos-2";
  carouselArrowPosClass3 = "arrow-pos-3";

  songsList: any = [];
  topCharts: any = {};
  newRelease: any = {};
  artists: any = {};
  retro: any = {};
  playlist: any = {};
  radio: any = {};
  genres: any = {};

  mainEvent: any = {};
  secondaryEvents: any = [];

  topDeezerCharts: any;
  deezerTopartists: {
    title: string;
    subTitle: string;
    page: string;
    items: {
      id: any;
      name: any;
      dob: string;
      cover_url: any;
      ratings: string | number;
      bio: string;
    }[];
  };
  podcast: { title: string; subTitle: string; page: string; items: any };
  deezerPlaylist: { title: string; subTitle: string; page: string; items: any };

  constructor(
    private loadingService: LoadingService,
    private artistsConfigService: ArtistsConfigService,
    private songsConfigService: SongsConfigService,
    private playlistConfigService: PlaylistConfigService,
    private radioConfigService: RadioConfigService,
    private genresConfigService: GenresConfigService,
    private eventsConfigService: EventsConfigService,
    private deezerAPIService: DeezerService
  ) {}

  async ngOnInit() {
    this.songsList = await this.songsConfigService.songsList;
    // Just takes first 6 index of array for ui
    this.songsList = this.songsList.slice(0, 6);

    this.initTopCharts();
    this.initNewRelease();
    this.initEvents();
    this.initArtists();
    this.initRetro();
    this.initPlaylist();
    this.initRadio();
    this.initGenres();
  }

  async ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  // Initialize top charts object for section
  initTopCharts() {
    this.topCharts = {
      title: "Top Charts",
      subTitle: "Listen top chart",
      page: "/songs",
      items: this.songsConfigService.songsList,
    };
  }

  // Initialize new release music object for section
  initNewRelease() {
    this.newRelease = {
      title: "New Releases",
      subTitle: "Listen recently release music",
      page: "/songs",
      items: this.songsConfigService.songsList,
    };
  }

  // Initialize music events object for section
  initEvents() {
    this.mainEvent = this.eventsConfigService.eventsList[0];
    this.secondaryEvents = this.eventsConfigService.eventsList.slice(1, 3);
  }

  // Initialize music artists object for section
  initArtists() {
    this.artists = {
      title: "Featured Artists",
      subTitle: "Select you best to listen",
      page: "/artists",
      items: this.artistsConfigService.artistsList,
    };
  }

  // Initialize retro music object for section
  initRetro() {
    this.retro = {
      title: "Retro Classic",
      subTitle: "Old is gold",
      page: "/songs",
      items: this.songsConfigService.songsList,
    };
  }

  // Initialize music playlist object for section
  initPlaylist() {
    this.playlist = {
      title: "Your Playlist",
      subTitle: "You best to listen",
      page: "/playlist",
      items: this.playlistConfigService.playlist,
    };

    // Add songs in playlist
    const playlistItems = this.playlist.items;
    for (const playlistItem of playlistItems) {
      playlistItem.songs = this.songsConfigService.songsList;
    }
  }

  // Initialize radio object for section
  initRadio() {
    this.radio = {
      title: "Radio",
      subTitle: "Listen live now",
      page: "/stations",
      items: this.radioConfigService.radioList,
    };
  }

  // Initialize music genres object for section
  initGenres() {
    this.genres = {
      title: "Genres",
      subTitle: "Select you genre",
      page: "/genres",
      items: this.genresConfigService.genresList,
    };
  }

  // Initialize music artists object for section
  async initDeezerArtists() {
    this.deezerTopartists = {
      title: "Featured Artists",
      subTitle: "Select you best to listen",
      page: "/artists",
      items: await this.artistsConfigService.artistsListDeezer.toPromise(),
    };
  }

  // Initiailize with top charts object from deezer api
  async initTopDeezerCharts() {
    try {
      this.topDeezerCharts = {
        title: "Top Charts",
        subTitle: "Listen to top ten artists",
        page: "/songs",
        items: await this.songsConfigService.songsList,
      };
    } catch (error) {
      console.log(`initTopDeezerCharts:- ${error}`);
    }
  }

  // Initialize pod cast object for section
  async initDeezerPodcast() {
    this.podcast = {
      title: "Radio",
      subTitle: "Listen live now",
      page: "/stations",
      items: this.radioConfigService.radioList,
    };
  }

  // Initialize music playlist object for section
  async initDeezerPlaylist() {
    this.deezerPlaylist = {
      title: "Your Playlist",
      subTitle: "You best to listen",
      page: "/playlist",
      items: this.playlistConfigService.playlist,
    };

    // Add songs in playlist
    const playlistItems = this.deezerPlaylist.items;
    for (const playlistItem of playlistItems) {
      playlistItem.songs = await this.songsConfigService.songsList;
    }
  }
}
