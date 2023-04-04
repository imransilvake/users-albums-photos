import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: ':id', component: DetailComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsersRoutingModule {}
