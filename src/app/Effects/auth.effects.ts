import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { AuthActionTypes } from '../Enum/AuthActionTypes';
import { mergeMap } from 'rxjs/operators'


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private _authService: AuthService
  ) {}

    effectName$ = createEffect(
      () => this.actions.pipe(
        ofType(AuthActionTypes.Login),
        mergeMap((action: any) => action)
      ),
      { dispatch: false}
    )

}