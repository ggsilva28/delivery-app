import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { SacolaEntregaPageRoutingModule } from './sacola-entrega-routing.module';

import { SacolaEntregaPage } from './sacola-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    SacolaEntregaPageRoutingModule
  ],
  declarations: [SacolaEntregaPage]
})
export class SacolaEntregaPageModule {}
