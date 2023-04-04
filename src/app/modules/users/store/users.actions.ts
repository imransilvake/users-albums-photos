import { createAction, props } from '@ngrx/store';
import {
	UserAlbumInterface,
	UserAlbumPhotoInterface,
	UserAlbumsPhotosInterface,
	UserInterface,
} from '../types/user.interface';

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

export const getUserAlbumPhotos = createAction(
	'[Users] Get User Album Photos',
	props<{ albumId: number }>()
);
export const getUserAlbumPhotosSuccess = createAction(
	'[Users] Get User Albums Photos Success',
	props<{ userAlbumsPhotos: UserAlbumsPhotosInterface }>()
);
export const getUserAlbumPhotosFailure = createAction(
	'[Users] Get User Albums Photos Failure',
	props<{ error: string }>()
);
