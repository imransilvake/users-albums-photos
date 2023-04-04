import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import {
	isLoaderSelector,
	isLoadingSelector,
	userAlbumsFailure,
	userAlbumsPhotosSelector,
	userAlbumsSelector,
} from '../../store/users.selectors';
import {
	UserAlbumInterface,
	UserAlbumsPhotosInterface,
} from '../../types/user.interface';
import * as UsersActions from '../../store/users.actions';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	isLoader$: Observable<boolean>;
	userAlbums$: Observable<UserAlbumInterface[]>;
	error$: Observable<string | null>;

	isLoading$: Observable<boolean>;
	userAlbumsPhotos$: Observable<UserAlbumsPhotosInterface>;

	albumIdx = -1;
	constructor(private store: Store<AppStateInterface>) {
		this.isLoader$ = this.store.pipe(select(isLoaderSelector));
		this.userAlbums$ = this.store.pipe(select(userAlbumsSelector));
		this.error$ = this.store.pipe(select(userAlbumsFailure));

		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.userAlbumsPhotos$ = this.store.pipe(
			select(userAlbumsPhotosSelector)
		);
	}

	ngOnInit(): void {
		// dispatch: fetch user albums
		this.userAlbums$.subscribe((userAlbums) => {
			if (userAlbums?.length) return;
			const userId = +(location.pathname?.split('/')?.pop() || 0);
			this.store.dispatch(UsersActions.getUserAlbums({ userId }));
		});
	}

	/**
	 * fetch album photos
	 * @param albumId
	 */
	fetchAlbumPhotos(albumId: number) {
		// dispatch: fetch album photos
		this.store.dispatch(UsersActions.getUserAlbumPhotos({ albumId }));

		// track clicked album for loading animation during fetch photos
		this.albumIdx = albumId;
	}
}
