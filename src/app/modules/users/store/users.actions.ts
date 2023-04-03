import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../types/user.interface';

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
	'[Users] Get Users Success',
	props<{ users: UserInterface[] }>()
);

export const getUsersFailure = createAction(
	'[Users] Get Users Failure',
	props<{ error: string }>()
);
