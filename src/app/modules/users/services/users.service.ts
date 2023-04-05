import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
	UserAlbumInterface,
	UserAlbumPhotoInterface,
	UserAlbumsPhotosInterface,
	UserInterface,
} from '../types/user.interface';

@Injectable()
export class UsersService {
	baseUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	/**
	 * fetch users
	 * @returns
	 */
	getUsers(): Observable<UserInterface[]> {
		return this.http.get<UserInterface[]>(`${this.baseUrl}/users`);
	}

	/**
	 * fetch user albums
	 * @param userId
	 * @returns
	 */
	getUserAlbums(userId: number): Observable<UserAlbumInterface[]> {
		return this.http.get<UserAlbumInterface[]>(`${this.baseUrl}/albums`, {
			params: { userId },
		});
	}

	/**
	 * fetch user album photos
	 * @param albumId
	 * @returns
	 */
	getUserAlbumsPhotos(
		albumId: number
	): Observable<UserAlbumsPhotosInterface> {
		return this.http
			.get<UserAlbumPhotoInterface[]>(`${this.baseUrl}/photos`, {
				params: { albumId },
			})
			.pipe(map((res) => ({ [albumId]: res })));
	}

	/**
	 * create user album
	 * @param title
	 * @returns
	 */
	createUserAlbum(title: string): Observable<UserAlbumInterface> {
		const userId = +(location.pathname?.split('/')?.pop() || 0);
		return this.http.post<UserAlbumInterface>(`${this.baseUrl}/albums`, {
			userId,
			title,
		});
	}
}
