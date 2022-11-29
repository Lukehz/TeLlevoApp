import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConductorPageRoutingModule } from './home-conductor-routing.module';

import { HomeConductorPage } from './home-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomeConductorPageRoutingModule
  ],
  declarations: [HomeConductorPage]
})
export class HomeConductorPageModule {}
