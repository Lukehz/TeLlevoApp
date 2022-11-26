import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaConductorPageRoutingModule } from './vista-conductor-routing.module';

import { VistaConductorPage } from './vista-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VistaConductorPageRoutingModule
  ],
  declarations: [VistaConductorPage]
})
export class VistaConductorPageModule {}
