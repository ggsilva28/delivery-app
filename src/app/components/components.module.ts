import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardapioHeaderComponent } from './cardapio/cardapio-header/cardapio-header.component';
import { CardapioRestauranteComponent } from './cardapio/cardapio-restaurante/cardapio-restaurante.component';
import { CardapioSacolaComponent } from './cardapio/cardapio-sacola/cardapio-sacola.component';
import { CardapioProdutosComponent } from './cardapio/cardapio-produtos/cardapio-produtos.component';
import { CardapioItemComponent } from './cardapio/cardapio-item/cardapio-item.component';

@NgModule({
    declarations: [
        CardapioHeaderComponent,
        CardapioRestauranteComponent,
        CardapioSacolaComponent,
        CardapioProdutosComponent,
        CardapioItemComponent
    ],
    exports: [
        CardapioHeaderComponent,
        CardapioRestauranteComponent,
        CardapioSacolaComponent,
        CardapioProdutosComponent,
        CardapioItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }