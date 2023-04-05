import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInterface } from '../../types/user.interface';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;
	let user!: UserInterface;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	beforeEach(() => {
		user = {
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
			address: { street: 'Kulas', city: 'Gwen', zipcode: '92998' },
			phone: '1-770-736-8031 x56442',
			company: { name: 'Roma', bs: 'harness real-time e-markets' },
		};
		component.user = user;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should have a correct user input`, () => {
		expect(component.user?.name).toEqual('Leanne Graham');
		expect(component.user?.username).toEqual('Bret');
		expect(component.user?.email).toEqual('Sincere@april.biz');
	});

	it('should render user detail', () => {
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
