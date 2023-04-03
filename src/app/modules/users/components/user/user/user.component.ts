import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../types/user.interface';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent {
	@Input() user: UserInterface | null = null;

	constructor() {
		console.log(this.user);
	}
}
