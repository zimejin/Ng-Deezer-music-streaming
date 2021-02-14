import { Action, createReducer, on } from "@ngrx/store";
import {
  Albums,
  Artist,
  Playlist,
  Podcast,
  Tracks,
} from "../../interfaces/app-interfaces";
import * as TracklistPageActions from "../actions/chart.actions";

export interface State {
  albums: Albums;
  artists: Artist;
  playlists: Playlist;
  podcasts: Podcast;
  tracks: Tracks;
}

export const initialState: State = {
  albums: null,
  artists: null,
  playlists: null,
  podcasts: null,
  tracks: null,
};

const chartsReducer = createReducer(
  initialState,
  on(TracklistPageActions.LoadFeaturedTracks, (state) => ({
    ...state,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return chartsReducer(state, action);
}
