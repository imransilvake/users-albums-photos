import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './users.service';

describe('UsersService', () => {
	let service: UsersService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [UsersService],
		});
		service = TestBed.inject(UsersService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have called getUsers() only one time', () => {
		spyOn(service, 'getUsers').and.callThrough();
		service.getUsers();
		expect(service.getUsers).toHaveBeenCalledTimes(1);
	});
});
