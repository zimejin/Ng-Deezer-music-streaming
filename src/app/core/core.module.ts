import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LineTabsDirective } from "./directives/line-tabs.directive";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";

@NgModule({
  imports: [CommonModule, StoreModule.forFeature("state", reducers)],
  declarations: [LineTabsDirective],
  exports: [LineTabsDirective],
})
export class CoreModule {}
