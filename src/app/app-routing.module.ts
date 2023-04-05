import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component'; // importer le composant HomeComponent du module client

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits/home',
    pathMatch: 'full',
  },
  {
    path: 'client',
    redirectTo: 'client/home',
    pathMatch: 'full',
  },
  {
    path: 'facture',
    redirectTo: 'facture/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

