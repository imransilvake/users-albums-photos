import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [
	{ path: '', redirectTo: 'users', pathMatch: 'full' },
	{
		path: 'users',
		loadChildren: () =>
			import('./modules/users/users.module').then((m) => m.UsersModule),
	},
	{ path: '**', component: E404Component },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
