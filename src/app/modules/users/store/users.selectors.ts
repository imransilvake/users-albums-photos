import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectUsers = (state: AppStateInterface) => state.users;

export const isLoaderSelector = createSelector(
	selectUsers,
	(state) => state.isLoading
);

export const usersSelector = createSelector(
	selectUsers,
	(state) => state.users
);

export const usersFailure = createSelector(selectUsers, (state) => state.error);
