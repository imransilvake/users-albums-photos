import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, catchError, map, mergeMap, delay } from 'rxjs';
import { UsersService } from '../services/users.service';

import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
	getUsers$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.getUsers),
			mergeMap(() => {
				return this.usersService.getUsers().pipe(
					delay(400),
					map((users) => UsersActions.getUsersSuccess({ users })),
					catchError((error) =>
						of(
							UsersActions.getUsersFailure({
								error: error.message,
							})
						)
					)
				);
			})
		)
	);

	getUserAlbums$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.getUserAlbums),
			mergeMap((payload) => {
				return this.usersService.getUserAlbums(payload.userId).pipe(
					delay(400),
					map((userAlbums) =>
						UsersActions.getUserAlbumsSuccess({ userAlbums })
					),
					catchError((error) =>
						of(
							UsersActions.getUserAlbumsFailure({
								error: error.message,
							})
						)
					)
				);
			})
		)
	);

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	) {}
}
