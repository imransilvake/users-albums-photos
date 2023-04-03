import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/users.reducers';
import { UsersComponent } from './components/users/users.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { UsersService } from './services/users.service';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('users', reducers),
		EffectsModule.forFeature([UsersEffects]),
	],
	declarations: [UsersComponent],
	providers: [UsersService],
	exports: [UsersComponent],
})
export class UsersModule {}
