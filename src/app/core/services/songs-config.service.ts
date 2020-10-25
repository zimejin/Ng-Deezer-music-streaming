import { Injectable } from "@angular/core";

import { SongsConfig } from "../../config/songs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
};

@Injectable({
  providedIn: "root",
})
export class SongsConfigService {
  public songsConfig: SongsConfig = new SongsConfig();

  constructor(private http: HttpClient) {}

  get songsList() {
    return this.songsConfig.config.items;
  }

  get defaultSong() {
    return this.songsConfig.config.items[0];
  }

  getSongByIb(id) {
    return this.songsList.find((song) => song.id === id);
  }

  getCharts(): Observable<object> {
    try {
      const path = environment.baseURL + "chart";
      return this.http.get(path, httpOptions).pipe(
        map((response: any) => response.tracks),
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
}

// console.log("Iterate:: ", data),

//   id: data.id || "",
//   name: data.title || "",
//   artist: data.artist.name || "",
//   // album: data.album.title || "",
//   url: data.artist.link || "",
//   cover_art_url: data.album.cover || "",
//   cover_url: data.album.cover_medium || "",
//   ratings: 4.5 || "",
//   composer: data.artist.name || "",
//   lyricist: data.artist.name || "",
//   director: "",
//   downloads: "",
//   lyrics: "",
