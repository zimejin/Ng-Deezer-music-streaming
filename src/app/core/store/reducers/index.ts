import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

import * as fromCharts from "./chart.reducers";

export const reducers: ActionReducerMap<AppState> = {
  charts: fromCharts.reducer,
};

export const getAppState = createFeatureSelector<AppState>("state");
