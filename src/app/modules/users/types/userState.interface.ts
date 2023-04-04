import { UserAlbumsInterface, UserInterface } from './user.interface';

export interface UsersStateInterface {
	isLoader: boolean;
	isLoading: boolean;
	users: UserInterface[];
	userAlbums: UserAlbumsInterface[];
	error: string | null;
}
