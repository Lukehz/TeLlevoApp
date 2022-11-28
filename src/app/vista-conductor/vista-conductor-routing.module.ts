import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaConductorPage } from './vista-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: VistaConductorPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class VistaConductorPageRoutingModule {}
