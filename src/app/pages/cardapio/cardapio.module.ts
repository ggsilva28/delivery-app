import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { CardapioPageRoutingModule } from './cardapio-routing.module';

import { CardapioPage } from './cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CardapioPageRoutingModule
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
