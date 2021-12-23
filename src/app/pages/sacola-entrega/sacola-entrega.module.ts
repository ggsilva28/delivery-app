import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacolaEntregaPageRoutingModule } from './sacola-entrega-routing.module';

import { SacolaEntregaPage } from './sacola-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacolaEntregaPageRoutingModule
  ],
  declarations: [SacolaEntregaPage]
})
export class SacolaEntregaPageModule {}
