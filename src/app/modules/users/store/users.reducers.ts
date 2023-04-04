import { createReducer, on } from '@ngrx/store';
import { UsersStateInterface } from '../types/userState.interface';
import * as UsersActions from './users.actions';

export const initialState: UsersStateInterface = {
	isLoader: false,
	isLoading: false,
	users: [],
	userAlbums: [],
	error: null,
};

export const reducers = createReducer(
	initialState,
	on(UsersActions.getUsers, (state) => ({
		...state,
		isLoader: true,
	})),
	on(UsersActions.getUsersSuccess, (state, action) => ({
		...state,
		isLoader: false,
		users: action.users,
	})),
	on(UsersActions.getUsersFailure, (state, action) => ({
		...state,
		isLoader: false,
		error: action.error,
	})),

	on(UsersActions.getUserAlbums, (state) => ({
		...state,
		isLoading: true,
	})),
	on(UsersActions.getUserAlbumsSuccess, (state, action) => ({
		...state,
		isLoading: false,
		userAlbums: action.userAlbums,
	})),
	on(UsersActions.getUserAlbumsFailure, (state, action) => ({
		...state,
		isLoading: false,
		error: action.error,
	}))
);
