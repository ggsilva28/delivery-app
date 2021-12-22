import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { RestaurantePageRoutingModule } from './restaurante-routing.module';

import { RestaurantePage } from './restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RestaurantePageRoutingModule
  ],
  declarations: [RestaurantePage]
})
export class RestaurantePageModule {}
