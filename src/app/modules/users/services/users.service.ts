import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAlbumInterface, UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
	baseUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	getUsers(): Observable<UserInterface[]> {
		return this.http.get<UserInterface[]>(`${this.baseUrl}/users`);
	}

	getUserAlbums(userId: number): Observable<UserAlbumInterface[]> {
		return this.http.get<UserAlbumInterface[]>(`${this.baseUrl}/albums`, {
			params: { userId },
		});
	}
}
