import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './pages/examples/examples.component';
import { examplesRoutes } from './pages/examples/examples.routes';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'examples', component: ExamplesComponent, data: { title: 'Examples' }, children: examplesRoutes },
  { path: '404',  component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
