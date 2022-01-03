import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { ModalLoadingSacolaPageRoutingModule } from './modal-loading-sacola-routing.module';

import { ModalLoadingSacolaPage } from './modal-loading-sacola.page';

//Lottie
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalLoadingSacolaPageRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [ModalLoadingSacolaPage]
})
export class ModalLoadingSacolaPageModule { }
