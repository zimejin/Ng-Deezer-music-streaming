import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SongsConfigService } from "../../../../core/services/songs-config.service";
import { AlbumsConfigService } from "../../../../core/services/albums-config.service";
import { ArtistsConfigService } from "../../../../core/services/artists-config.service";
import { SearchService } from "../../../../core/services/search.service";

@Component({
  selector: "app-search",
  template: `
    <!-- Begin | Search Card [[ Find at scss/framework/base/search/search.scss ]] -->
    <div class="search-card">
      <perfect-scrollbar>
        <!-- Begin | Search Result List -->
        <div class="search-item">
          <div class="search-item-header">
            <span class="search-item-title">Artists</span>
            <a class="search-item-link ml-auto" (click)="goToPage('artists')"
              >View All</a
            >
          </div>
          <div class="search-item-body row">
            <div
              class="col-xl-2 col-md-4 col-6"
              *ngFor="let artist of artistsList"
            >
              <app-image-card
                [item]="artist"
                [imageBorderRadiusClass]="'card-img--radius-md'"
                [routeLink]="'/artist/' + artist.id + '/details'"
              ></app-image-card>
            </div>
          </div>
        </div>
        <!-- End | Search Result List -->

        <!-- Begin | Search Result List -->
        <div class="search-item">
          <div class="search-item-header">
            <span class="search-item-title">Track</span>
            <a class="search-item-link ml-auto" (click)="goToPage('songs')"
              >View All</a
            >
          </div>
          <div class="search-item-body row">
            <div
              class="col-xl-4 col-sm-6 col-12"
              *ngFor="let song of songsList"
            >
              <app-song-horizontal
                [song]="song"
                class="song-h song-h--sm"
              ></app-song-horizontal>
            </div>
          </div>
        </div>
        <!-- End | Search Result List -->

        <!-- Begin | Search Result List -->
        <div class="search-item">
          <div class="search-item-header">
            <span class="search-item-title">Albums</span>
            <a class="search-item-link ml-auto" (click)="goToPage('albums')"
              >View All</a
            >
          </div>
          <div class="search-item-body row">
            <div
              class="col-xl-4 col-sm-6 col-12"
              *ngFor="let album of albumsList"
            >
              <app-song-horizontal
                [song]="album"
                class="song-h song-h--sm"
                [routeLink]="'/album/' + album.id + '/details'"
              ></app-song-horizontal>
            </div>
          </div>
        </div>
        <!-- End | Search Result List -->
      </perfect-scrollbar>
    </div>
    <!-- End | Search Card -->
  `,
})
export class SearchComponent implements OnInit {
  songsList: any = [];
  albumsList: any = [];
  artistsList: any = [];

  constructor(
    private router: Router,
    private songsConfigService: SongsConfigService,
    private albumsConfigService: AlbumsConfigService,
    private artistsConfigService: ArtistsConfigService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.songsList = this.songsConfigService.songsList;
    this.songsList = this.songsList.slice(0, 3);

    this.albumsList = this.albumsConfigService.albumsList;
    this.albumsList = this.albumsList.slice(2, 5);

    this.artistsList = this.artistsConfigService.artistsList;
    this.artistsList = this.artistsList.slice(0, 6);
  }

  goToPage(page) {
    page = "/" + page;
    this.searchService.hideSearchResult();
    this.router.navigate([page]);
  }
}
