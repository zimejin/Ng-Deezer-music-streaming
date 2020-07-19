import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./content/layout/layout.module";
import { LoaderComponent } from "./content/layout/loader/loader.component";
import { LoadingService } from "./core/services/loading.service";
import { MenuConfigService } from "./core/services/menu-config.service";
import { SongsConfigService } from "./core/services/songs-config.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({}, {}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [LoadingService, MenuConfigService, SongsConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
