import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap, map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { ArtistsConfig } from "../../config/artists";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
};

@Injectable({
  providedIn: "root",
})
export class ArtistsConfigService {
  public artistsConfig: ArtistsConfig = new ArtistsConfig();

  constructor(private http: HttpClient) {}

  get artistsList() {
    return this.artistsConfig.config.items;
  }

  get artistsListDeezer() {
    const path = environment.baseURL + "chart";
    return this.http.get(path, httpOptions).pipe(
      map((response: any) => response.artists),
      map((artists: any) => artists.data),
      switchMap((data: any[]) => {
        return of(
          data.map((data: any) => ({
            id: data.id || "",
            name: data.name || "",
            dob: "",
            cover_url: data.picture_medium || "",
            ratings: 4.5 || "",
            bio:
              "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>",
          }))
        );
      })
    );
  }

  getArtistByIb(id) {
    return this.artistsList.find((artist) => artist.id === id);
  }
}
