import { UserInterface } from './user.interface';

export interface UsersStateInterface {
	isLoading: boolean;
	users: UserInterface[];
	error: string | null;
}
