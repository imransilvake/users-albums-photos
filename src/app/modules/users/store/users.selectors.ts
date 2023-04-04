import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectUsers = (state: AppStateInterface) => state.users;

export const isLoaderSelector = createSelector(
	selectUsers,
	(state) => state.isLoader
);
export const isLoadingSelector = createSelector(
	selectUsers,
	(state) => state.isLoading
);

export const usersSelector = createSelector(
	selectUsers,
	(state) => state.users
);
export const usersFailure = createSelector(selectUsers, (state) => state.error);

export const userAlbumsSelector = createSelector(
	selectUsers,
	(state) => state.userAlbums
);
export const userAlbumsFailure = createSelector(
	selectUsers,
	(state) => state.error
);

export const userAlbumsPhotosSelector = createSelector(
	selectUsers,
	(state) => state.userAlbumsPhotos
);
export const userAlbumsPhotosFailure = createSelector(
	selectUsers,
	(state) => state.error
);
