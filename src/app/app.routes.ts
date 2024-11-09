import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './home/cadastrar/cadastrar.component';
import { LoginComponent } from './home/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' } 
];
