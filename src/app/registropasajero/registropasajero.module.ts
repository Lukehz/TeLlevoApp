import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistropasajeroPageRoutingModule } from './registropasajero-routing.module';

import { RegistropasajeroPage } from './registropasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistropasajeroPageRoutingModule
  ],
  declarations: [RegistropasajeroPage]
})
export class RegistropasajeroPageModule {}
