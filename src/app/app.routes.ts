import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto }
];