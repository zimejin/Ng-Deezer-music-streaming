import { createAction, props } from "@ngrx/store";
import { DeezerAPIState } from "../reducers/chart.reducers";

export const LoadFeaturedTracks = createAction(
  "[Deezer API] Load Featured Tracks"
);

export const SuccessLoadFeatureTracks = createAction(
  "[Deezer API] Loading Featured Tracks Successful",
  props<DeezerAPIState>()
);

export const LoadFeatureFailed = createAction(
  "[Deezer API] Load Featured Tracks Failed",
  props<any>()
);
