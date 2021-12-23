import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacolaClientePageRoutingModule } from './sacola-cliente-routing.module';

import { SacolaClientePage } from './sacola-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacolaClientePageRoutingModule
  ],
  declarations: [SacolaClientePage]
})
export class SacolaClientePageModule {}
