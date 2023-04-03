import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, catchError, map, mergeMap } from 'rxjs';
import { UsersService } from '../services/users.service';

import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
	getUsers$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.getUsers),
			mergeMap(() => {
				return this.usersService.getUsers().pipe(
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

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	) {}
}