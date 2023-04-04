import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInterface } from '../../../types/user.interface';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;
	let user: UserInterface | null;

	beforeEach(() => {
		user = {
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
			address: {
				street: 'Kulas Light',
				city: 'Gwenborough',
				zipcode: '92998-3874',
			},
			phone: '1-770-736-8031 x56442',
			company: {
				name: 'Romaguera-Crona',
				bs: 'harness real-time e-markets',
			},
		};
	});

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should have a correct user input`, () => {
		const fixture = TestBed.createComponent(UserComponent);
		const userComponent = fixture.componentInstance;

		userComponent.user = user;

		expect(userComponent.user?.name).toEqual('Leanne Graham');
		expect(userComponent.user?.username).toEqual('Bret');
		expect(userComponent.user?.email).toEqual('Sincere@april.biz');
	});

	it('should render user detail', () => {
		const fixture = TestBed.createComponent(UserComponent);

		const userComponent = fixture.componentInstance;
		userComponent.user = user;

		const compiled = fixture.nativeElement as HTMLElement;

		fixture.detectChanges();

		expect(compiled.querySelector('h2')?.textContent).toContain(
			'Leanne Graham'
		);
		expect(compiled.querySelector('.app-company i')?.textContent).toContain(
			'(harness real-time e-markets)'
		);
	});
});
