import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { UsersStateInterface } from '../../types/userState.interface';

describe('UsersComponent', () => {
	let component: UsersComponent;
	let fixture: ComponentFixture<UsersComponent>;
	let store: MockStore<UsersStateInterface>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [provideMockStore({})],
			declarations: [UsersComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UsersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		store = TestBed.get(Store);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should have called dispatch one time`, async () => {
		const fixture = TestBed.createComponent(UsersComponent);

		spyOn(store, 'dispatch').and.callThrough();
		fixture.detectChanges();

		expect(store.dispatch).toHaveBeenCalledTimes(1);
	});
});
