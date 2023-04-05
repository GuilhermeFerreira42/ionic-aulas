import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MumucaPageRoutingModule } from './mumuca-routing.module';

import { MumucaPage } from './mumuca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MumucaPageRoutingModule
  ],
  declarations: [MumucaPage]
})
export class MumucaPageModule {}
