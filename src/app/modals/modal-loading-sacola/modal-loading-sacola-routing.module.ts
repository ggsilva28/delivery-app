import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLoadingSacolaPage } from './modal-loading-sacola.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLoadingSacolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLoadingSacolaPageRoutingModule {}
