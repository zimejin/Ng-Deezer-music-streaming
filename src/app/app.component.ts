import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DeezerService } from "./core/services/deezer-service";
import { LoadingService } from "./core/services/loading.service";
import { LoadFeaturedTracks } from "./core/store";
import { DeezerAPIState } from "./core/store/reducers/chart.reducers";

@Component({
  selector: "app-root",
  template: `
    <!-- App loader -->
    <app-loader></app-loader>
    <!-- Router outlet to display routes -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = "ng-deezer";
  chart$: Observable<DeezerAPIState>;

  constructor(
    private loadingService: LoadingService,
    private store: Store<{ chart: DeezerAPIState }>
  ) {
    this.loadingService.startLoading();

    // Dispatch action to the store to load the featured tracks from deezer
    this.store.dispatch(LoadFeaturedTracks());
  }

  ngOnInit() {
    this.chart$ = this.store.select("chart");

    this.chart$.subscribe((state) => console.log("Chart State:: ", state));
  }
}
