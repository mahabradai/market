import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'category',
    redirectTo: 'category/home',
    pathMatch: 'full',
  },
  {
    path: 'vegetables',
    redirectTo: 'vegetables/home',
    pathMatch: 'full',
  },
  {
    path: 'review',
    redirectTo: 'review/home',
    pathMatch: 'full',
  },
  {
    path: 'qualitycontrol',
    redirectTo: 'review/home',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

