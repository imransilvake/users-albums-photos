import { createAction, props } from '@ngrx/store';
import { UserAlbumInterface, UserInterface } from '../types/user.interface';

export const getUsers = createAction('[Users] Get Users');
export const getUsersSuccess = createAction(
	'[Users] Get Users Success',
	props<{ users: UserInterface[] }>()
);
export const getUsersFailure = createAction(
	'[Users] Get Users Failure',
	props<{ error: string }>()
);

export const getUserAlbums = createAction(
	'[Users] Get User Albums',
	props<{ userId: number }>()
);
export const getUserAlbumsSuccess = createAction(
	'[Users] Get User Albums Success',
	props<{ userAlbums: UserAlbumInterface[] }>()
);
export const getUserAlbumsFailure = createAction(
	'[Users] Get User Albums Failure',
	props<{ error: string }>()
);
