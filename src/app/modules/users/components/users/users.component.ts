import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as UsersActions from '../../store/users.actions';
import {
	isLoaderSelector,
	usersSelector,
	usersFailure,
} from '../../store/users.selectors';
import { UserInterface } from '../../types/user.interface';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
	isLoader$: Observable<boolean>;
	users$: Observable<UserInterface[]>;
	error$: Observable<string | null>;

	constructor(private store: Store<AppStateInterface>) {
		this.isLoader$ = this.store.pipe(select(isLoaderSelector));
		this.users$ = this.store.pipe(select(usersSelector));
		this.error$ = this.store.pipe(select(usersFailure));
	}

	ngOnInit(): void {
		// dispatch: fetch users
		this.users$.subscribe((users) => {
			if (users?.length) return;
			this.store.dispatch(UsersActions.getUsers());
		});
	}
}
