import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacolaEntregaPage } from './sacola-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: SacolaEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SacolaEntregaPageRoutingModule {}
