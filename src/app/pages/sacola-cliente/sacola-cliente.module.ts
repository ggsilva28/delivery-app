import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { SacolaClientePageRoutingModule } from './sacola-cliente-routing.module';

import { SacolaClientePage } from './sacola-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    SacolaClientePageRoutingModule
  ],
  declarations: [SacolaClientePage]
})
export class SacolaClientePageModule {}
