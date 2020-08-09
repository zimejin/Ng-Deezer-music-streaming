import { Component, OnInit } from "@angular/core";
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

  constructor(private loadingService: LoadingService) {
    this.loadingService.startLoading();
  }

  ngOnInit() {}
}
