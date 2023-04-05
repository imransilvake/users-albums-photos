import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as UsersActions from '../../store/users.actions';

@Component({
	selector: 'app-album-create',
	templateUrl: './album-create.component.html',
	styleUrls: ['./album-create.component.scss'],
})
export class AlbumCreateComponent implements AfterViewInit {
	@Output() onEmitSubmit = new EventEmitter<boolean>();
	@ViewChild('input') input!: ElementRef;

	title = new FormControl('');

	constructor(private store: Store<AppStateInterface>) {}

	ngAfterViewInit(): void {
		this.input.nativeElement.focus();
	}

	/**
	 * create album
	 */
	createAlbum() {
		const title = String(this.title.value);

		// dispatch: create user album
		this.store.dispatch(UsersActions.createUserAlbum({ title }));

		// close form
		this.onEmitSubmit.next(false);
	}
}
