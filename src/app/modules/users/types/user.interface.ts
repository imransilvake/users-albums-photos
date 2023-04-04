export interface UserInterface {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddressInterface;
	phone: string;
	website?: string;
	company: UserCompanyInterface;
}
export interface UserAddressInterface {
	street: string;
	city: string;
	zipcode: string;
	suite?: string;
	geo?: {
		lat: string;
		lng: string;
	};
}
export interface UserCompanyInterface {
	name: string;
	bs: string;
	catchPhrase?: string;
}

export interface UserAlbumInterface {
	id: number;
	userId: number;
	title: string;
}

export interface UserAlbumPhotoInterface {
	id: number;
	albumId: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export interface UserAlbumsPhotosInterface {
	[key: number]: UserAlbumPhotoInterface[];
}
