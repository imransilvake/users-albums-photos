export interface UserInterface {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddressInterface;
	phone: string;
	website: string;
	company: UserCompanyInterface;
}

export interface UserAddressInterface {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
}

export interface UserCompanyInterface {
	name: string;
	catchPhrase: string;
	bs: string;
}
