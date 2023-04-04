import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAlbumsInterface, UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
	baseUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	getUsers(): Observable<UserInterface[]> {
		return this.http.get<UserInterface[]>(`${this.baseUrl}/users`);
	}

	getUserAlbums(userId: number): Observable<UserAlbumsInterface[]> {
		return this.http.get<UserAlbumsInterface[]>(`${this.baseUrl}/albums`, {
			params: { userId },
		});
	}
}
