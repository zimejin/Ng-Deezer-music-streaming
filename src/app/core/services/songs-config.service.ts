import { Injectable } from "@angular/core";

import { SongsConfig } from "../../config/songs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  getCharts() {
    const path = environment.baseURL + "chart";
    return this.http.get(path, httpOptions);
  }
}
