import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { UsersStateInterface } from '../../types/userState.interface';
import * as UsersActions from '../../store/users.actions';

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
		spyOn(store, 'dispatch').and.callThrough();

		store.dispatch(UsersActions.getUsers());

		expect(store.dispatch).toHaveBeenCalledTimes(1);
	});
});
