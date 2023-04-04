import {
	UserAlbumInterface,
	UserAlbumsPhotosInterface,
	UserInterface,
} from './user.interface';

export interface UsersStateInterface {
	isLoader: boolean;
	isLoading: boolean;
	users: UserInterface[];
	userAlbums: UserAlbumInterface[];
	userAlbumsPhotos: UserAlbumsPhotosInterface;
	error: string | null;
}
