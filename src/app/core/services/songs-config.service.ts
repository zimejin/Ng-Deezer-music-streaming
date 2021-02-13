import { Injectable, OnInit } from "@angular/core";

import { SongsConfig } from "../../config/songs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, ReplaySubject } from "rxjs";
import { map, pluck, switchMap, tap } from "rxjs/operators";
import {
  Album_Data_Model,
  API_CHART_DATA_MODEL,
  Artist_Data_Model,
  Playlist,
  Playlist_Data_Model,
  Podcast_Data_Model,
  Tracks,
} from "../interfaces/app-interfaces";
import { DeezerService } from "./deezer-service";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
};

@Injectable({
  providedIn: "root",
})
export class SongsConfigService {
  public songsConfig: SongsConfig = new SongsConfig();

  topChart: Observable<API_CHART_DATA_MODEL>;

  source$: Observable<Tracks>;

  constructor(private chartsService: DeezerService) {}

  get songsList() {
    return this.songsConfig.config.items;
  }

  get defaultSong() {
    return this.songsConfig.config.items[0];
  }

  async getSongByIb(id: number) {
    let list = await this.songsList.toPromise();
    list.find((song: { id: any }) => song.id === id);
  }

  private fetchTracks(): Observable<object[]> {
    try {
      return this.chartsService.chartsObservable$.pipe(pluck("tracks")).pipe(
        map((tracks: any) => tracks.data),
        switchMap((data: any[]) => {
          return of(
            data.map((data: any) => ({
              id: data.id || "",
              name: data.title || "",
              artist: data.artist.name || "",
              album: data.album.title || "",
              url: data.artist.link || "",
              cover_art_url: data.album.cover || "",
              cover_url: data.album.cover_medium || "",
              ratings: 4.5 || "",
              composer: data.artist.name || "",
              lyricist: data.artist.name || "",
              director: "",
              downloads: "",
              lyrics: "",
            }))
          );
        })
      );
    } catch (error) {
      console.log("getCharts Error::", error);
    }
  }

  fetch_TopTenAlbums(): Observable<any[]> {
    try {
      return this.topChart.pipe(
        map((response: API_CHART_DATA_MODEL) => response.albums),
        map((albums) => albums.data),
        switchMap((data: any[]) => {
          return of(
            data.map((data: Album_Data_Model) => ({
              id: data.id || "",
              name: data.title || "",
              artist: data.artist.name || "",
              album: data.title || "",
              url: data.artist.link || "",
              cover_art_url: data.cover || "",
              cover_url: data.cover_medium || "",
              ratings: 4.5 || "",
              composer: data.artist.name || "",
              lyricist: data.artist.name || "",
              director: "",
              downloads: "",
              lyrics: "",
            }))
          );
        })
      );
    } catch (error) {
      console.log("getCharts Error::", error);
    }
  }

  fetch_TopTenArtist(): Observable<any[]> {
    try {
      return this.topChart.pipe(
        map((response: API_CHART_DATA_MODEL) => response.artists),
        map((artists) => artists.data),
        switchMap((data: Artist_Data_Model[]) => {
          return of(
            data.map((data: Artist_Data_Model) => ({
              id: data.id || "",
              name: data.name || "",
              artist: data.name || "",
              album: "",
              url: data.link || "",
              cover_art_url: data.picture_big || "",
              cover_url: data.picture_medium || "",
              ratings: 4.5 || "",
              tracklist: data.tracklist,
              composer: data.name || "",
              lyricist: data.name || "",
              director: "",
              downloads: "",
              lyrics: "",
            }))
          );
        })
      );
    } catch (error) {
      console.log("getCharts Error::", error);
    }
  }

  fetch_TopTenPlaylist(): Observable<any[]> {
    try {
      return this.topChart.pipe(
        map((response: API_CHART_DATA_MODEL) => response.playlists),
        map((playlist) => playlist.data),
        switchMap((data: Playlist_Data_Model[]) => {
          return of(
            data.map((data: Playlist_Data_Model) => ({
              id: data.id || "",
              name: data.title || "",
              artist: "",
              album: data.title || "",
              url: data.link || "",
              cover_art_url: data.picture_big || "",
              cover_url: data.picture_medium || "",
              ratings: 4.5 || "",
              composer: "",
              lyricist: "",
              tracklist: data.tracklist,
              director: "",
              downloads: "",
              lyrics: "",
            }))
          );
        })
      );
    } catch (error) {
      console.log("getCharts Error::", error);
    }
  }

  fetch_TopTenPodcast() {
    try {
      return this.topChart.pipe(
        map((response: API_CHART_DATA_MODEL) => response.podcasts),
        map((podcasts) => podcasts.data),
        switchMap((data) => {
          return of(
            data.map((data: Podcast_Data_Model) => ({
              id: data.id || "",
              name: data.title || "",
              description: data.description,
              artist: "",
              album: data.title || "",
              url: data.link || "",
              cover_art_url: data.picture_big || "",
              cover_url: data.picture_medium || "",
              ratings: 4.5 || "",
              composer: "",
              lyricist: "",
              director: "",
              downloads: "",
              lyrics: "",
            }))
          );
        })
      );
    } catch (error) {
      console.log("getCharts Error::", error);
    }
  }
}
