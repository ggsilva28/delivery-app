import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTipoEntregaPageRoutingModule } from './modal-tipo-entrega-routing.module';

import { ModalTipoEntregaPage } from './modal-tipo-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTipoEntregaPageRoutingModule
  ],
  declarations: [ModalTipoEntregaPage]
})
export class ModalTipoEntregaPageModule {}
