import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MumucaPage } from './mumuca.page';

const routes: Routes = [
  {
    path: '',
    component: MumucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MumucaPageRoutingModule {}
