import { DeezerAPIState } from "./core/store/reducers/chart.reducers";

export interface AppState {
  charts: Readonly<DeezerAPIState>;
}
