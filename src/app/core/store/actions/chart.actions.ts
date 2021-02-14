import { createAction, props } from "@ngrx/store";

export const LoadFeaturedTracks = createAction(
  "[Home Page] Load Featured Tracks",
  props<any>()
);