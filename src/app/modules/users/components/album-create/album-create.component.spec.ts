import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { AlbumCreateComponent } from './album-create.component';

describe('AlbumCreateComponent', () => {
	let component: AlbumCreateComponent;
	let fixture: ComponentFixture<AlbumCreateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule],
			providers: [provideMockStore({})],
			declarations: [AlbumCreateComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlbumCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
