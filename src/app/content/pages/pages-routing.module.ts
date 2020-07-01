import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPageComponent } from "./snippets/error-page/error-page.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
  },
  {
    path: "404",
    component: ErrorPageComponent, 
  },
  {
    path: "pages",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: "./components/components.module#ComponentsModule",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
