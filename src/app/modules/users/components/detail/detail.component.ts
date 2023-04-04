import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import {
	isLoaderSelector,
	userAlbumsFailure,
	userAlbumsSelector,
} from '../../store/users.selectors';
import { UserAlbumsInterface } from '../../types/user.interface';
import * as UsersActions from '../../store/users.actions';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	isLoading$: Observable<boolean>;
	userAlbums$: Observable<UserAlbumsInterface[]>;
	error$: Observable<string | null>;

	constructor(private store: Store<AppStateInterface>) {
		this.isLoading$ = this.store.pipe(select(isLoaderSelector));
		this.userAlbums$ = this.store.pipe(select(userAlbumsSelector));
		this.error$ = this.store.pipe(select(userAlbumsFailure));
	}

	ngOnInit(): void {
		// user id
		const userId = +(location.pathname?.split('/')?.pop() || 0);

		// dispatch: fetch user albums
		this.store.dispatch(UsersActions.getUserAlbums({ userId }));
	}
}
