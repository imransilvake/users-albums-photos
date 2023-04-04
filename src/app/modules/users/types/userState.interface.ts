import { UserAlbumInterface, UserInterface } from './user.interface';

export interface UsersStateInterface {
	isLoader: boolean;
	isLoading: boolean;
	users: UserInterface[];
	userAlbums: UserAlbumInterface[];
	error: string | null;
}
