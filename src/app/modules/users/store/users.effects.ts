import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, catchError, map, mergeMap, delay, withLatestFrom } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { UsersService } from '../services/users.service';

import * as UsersActions from './users.actions';
import { userAlbumsPhotosSelector } from './users.selectors';

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

	getUserAlbumPhotos$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.getUserAlbumPhotos),
			withLatestFrom(this.store.select(userAlbumsPhotosSelector)),
			mergeMap(([payload, existingValues]) => {
				return this.usersService
					.getUserAlbumsPhotos(payload.albumId)
					.pipe(
						delay(400),
						map((userAlbumsPhotos) =>
							UsersActions.getUserAlbumPhotosSuccess({
								userAlbumsPhotos: {
									...existingValues,
									...userAlbumsPhotos,
								},
							})
						),
						catchError((error) =>
							of(
								UsersActions.getUserAlbumPhotosFailure({
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
		private store: Store<AppStateInterface>,
		private usersService: UsersService
	) {}
}
