import { Component, OnInit } from "@angular/core";
import { DeezerService } from "./core/services/deezer-service";
import { LoadingService } from "./core/services/loading.service";

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

  constructor(
    private loadingService: LoadingService,
    private deezerAPIService: DeezerService
  ) {
    this.loadingService.startLoading();

    // Load the charts data from the microservice
    this.deezerAPIService.initialize();
  }

  ngOnInit() {}
}
