import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/operators";
import { API_CHART_DATA_MODEL } from "../interfaces/app-interfaces";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
};

@Injectable({
  providedIn: "root",
})
export class DeezerService {
  // Node/Express API
  REST_API: string = "http://localhost:3000/api";

  private chartSource$ = new BehaviorSubject<API_CHART_DATA_MODEL>(null);
  chartsObservable$ = this.chartSource$.asObservable();

  constructor(private http: HttpClient) {}

  initialize() {
    console.clear();
    console.log("Initialized");
    this.chartItems()
      .pipe(tap((response) => console.log("Deezer response -> ", response)))
      .subscribe((items) => (items ? this.chartSource$.next(items) : null));
  }

  private chartItems(): Observable<API_CHART_DATA_MODEL> {
    const path = `${this.REST_API}/getCharts`;
    return this.http.get<API_CHART_DATA_MODEL>(path, httpOptions);
  }
}
