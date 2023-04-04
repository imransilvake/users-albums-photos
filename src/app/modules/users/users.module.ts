import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/users.reducers';
import { UsersComponent } from './components/users/users.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { UsersService } from './services/users.service';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/detail/detail.component';
import { UsersRoutingModule } from './app-routing.users';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('users', reducers),
		EffectsModule.forFeature([UsersEffects]),
		UsersRoutingModule,
	],
	declarations: [UsersComponent, UserComponent, DetailComponent],
	providers: [UsersService],
	exports: [UsersComponent],
})
export class UsersModule {}
