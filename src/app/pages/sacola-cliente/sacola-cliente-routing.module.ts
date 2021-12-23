import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacolaClientePage } from './sacola-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: SacolaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SacolaClientePageRoutingModule {}
