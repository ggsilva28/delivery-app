import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { SacolaPageRoutingModule } from './sacola-routing.module';

import { SacolaPage } from './sacola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SacolaPageRoutingModule
  ],
  declarations: [SacolaPage]
})
export class SacolaPageModule {}
