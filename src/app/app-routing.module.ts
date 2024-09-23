import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { AdoteComponent } from './pages/adote/adote.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'adote', component: AdoteComponent },
];
