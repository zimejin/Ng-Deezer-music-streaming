// Effect to load the featured chart items
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { DeezerService } from "../../services/deezer-service";
import * as ChartActions from "../actions/chart.actions";

@Injectable()
export class ChartsEffects {
  loadFeaturedTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartActions.LoadFeaturedTracks),
      mergeMap(() =>
        this.deezerService.chartItems.pipe(
          map((response) => ChartActions.SuccessLoadFeatureTracks(response)),
          catchError((error) => of(ChartActions.LoadFeatureFailed(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private deezerService: DeezerService
  ) {}
}
