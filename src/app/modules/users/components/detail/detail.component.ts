import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import {
	isLoaderSelector,
	isLoadingSelector,
	userAlbumsFailure,
	userAlbumsPhotosFailure,
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
	userAlbumsError$: Observable<string | null>;

	isLoading$: Observable<boolean>;
	userAlbumsPhotos$: Observable<UserAlbumsPhotosInterface>;
	userAlbumsPhotosError$: Observable<string | null>;

	albumIdx = -1;
	albumsPhotos: UserAlbumsPhotosInterface | null = null;

	constructor(private store: Store<AppStateInterface>) {
		this.isLoader$ = this.store.pipe(select(isLoaderSelector));
		this.userAlbums$ = this.store.pipe(select(userAlbumsSelector));
		this.userAlbumsError$ = this.store.pipe(select(userAlbumsFailure));

		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.userAlbumsPhotos$ = this.store.pipe(
			select(userAlbumsPhotosSelector)
		);
		this.userAlbumsPhotosError$ = this.store.pipe(
			select(userAlbumsPhotosFailure)
		);

		this.userAlbumsPhotos$.subscribe((res) => (this.albumsPhotos = res));
	}

	async ngOnInit(): Promise<void> {
		// user id, user albums
		const userId = +(location.pathname?.split('/')?.pop() || 0);
		const userAlbums = await firstValueFrom(this.userAlbums$);

		// dispatch: fetch user albums
		if (userAlbums?.length && userAlbums?.[0]?.userId === userId) return;
		this.store.dispatch(UsersActions.getUserAlbums({ userId }));
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
