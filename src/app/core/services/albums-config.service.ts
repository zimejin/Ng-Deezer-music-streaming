import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, map, switchMap, pluck } from "rxjs/operators";

import { AlbumsConfig } from "../../config/albums";
import {
  API_CHART_DATA_MODEL,
  Album_Data_Model,
  Albums,
} from "../interfaces/app-interfaces";
import { DeezerService } from "./deezer-service";

@Injectable({
  providedIn: "root",
})
export class AlbumsConfigService {
  public albumsConfig: AlbumsConfig = new AlbumsConfig();
  source$: Observable<Albums>;

  constructor(private chartsService: DeezerService) {
    this.source$ = this.chartsService.chartsObservable$.pipe(pluck("albums"));
    this.source$.subscribe((data) => console.log("Chart Observable - ", data));
  }

  // get albumsList() {
  //   return this.albumsConfig.config.items;
  // }

  async getAlbumByIb(id: number) {
    let list = await this.albumsList.toPromise();
    list.find((album: { id: any }) => album.id === id);
  }

  get albumsList(): Observable<any> {
    try {
      return this.source$.pipe(
        tap((response) => console.log("Response from getCharts -> ", response)),
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
}
