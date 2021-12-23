import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTipoEntregaPage } from './modal-tipo-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTipoEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTipoEntregaPageRoutingModule {}
