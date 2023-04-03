import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as UsersActions from '../store/users.actions';
import { isLoaderSelector } from '../store/users.selectors';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
	isLoading$: Observable<boolean>;

	constructor(private store: Store<AppStateInterface>) {
		// state: loading
		this.isLoading$ = this.store.pipe(select(isLoaderSelector));
	}

	ngOnInit(): void {
		// dispatch: fetch users
		this.store.dispatch(UsersActions.getUsers());
	}
}
