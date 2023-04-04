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

export interface UserAlbumsInterface {
	userId: number;
	id: number;
	title: string;
}
