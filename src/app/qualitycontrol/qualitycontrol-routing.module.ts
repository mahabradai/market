import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'qualitycontrol/home',
    component: HomeComponent,
  },{
    path: 'qualitycontrol/create',
    component: CreateComponent,
  },
  {
    path:'qualitycontrol/edit/:id',
    component: EditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualitycontrolRoutingModule { }
