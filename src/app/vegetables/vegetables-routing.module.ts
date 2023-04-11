import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'vegetables/home',
    component: HomeComponent,
  },{
    path: 'vegetables/create',
    component: CreateComponent,
  },
  {
    path:'vegetables/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegetablesRoutingModule { }

