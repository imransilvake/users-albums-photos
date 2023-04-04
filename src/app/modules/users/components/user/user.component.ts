import { Component, Input } from '@angular/core';
import { UserInterface } from '../../types/user.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent {
	@Input() user!: UserInterface;

	constructor(private router: Router) {}

	/**
	 * show user detail page
	 * @param userId number
	 */
	showDetailPage(userId: number) {
		this.router.navigate([`users/${userId}`]);
	}
}
