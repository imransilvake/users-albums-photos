import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Users Center';

	constructor(private router: Router) {}

	/**
	 * show home page
	 */
	showHomePage() {
		this.router.navigate(['']);
	}
}
