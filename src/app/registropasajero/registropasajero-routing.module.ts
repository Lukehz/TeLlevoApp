import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistropasajeroPage } from './registropasajero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistropasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistropasajeroPageRoutingModule {}
