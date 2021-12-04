import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

//Cardapio
import { CardapioHeaderComponent } from './cardapio/cardapio-header/cardapio-header.component';
import { CardapioRestauranteComponent } from './cardapio/cardapio-restaurante/cardapio-restaurante.component';
import { CardapioSacolaComponent } from './cardapio/cardapio-sacola/cardapio-sacola.component';
import { CardapioProdutosComponent } from './cardapio/cardapio-produtos/cardapio-produtos.component';
import { CardapioItemComponent } from './cardapio/cardapio-item/cardapio-item.component';

//Produtos
import { ProdutoAdicionalComponent } from './produto/produto-adicional/produto-adicional.component';
import { ProdutoAdicionalOpcaoComponent } from './produto/produto-adicional-opcao/produto-adicional-opcao.component';
import { ProdutoCountComponent } from './produto/produto-count/produto-count.component';
@NgModule({
    declarations: [
        CardapioHeaderComponent,
        CardapioRestauranteComponent,
        CardapioSacolaComponent,
        CardapioProdutosComponent,
        CardapioItemComponent,
        ProdutoAdicionalComponent,
        ProdutoAdicionalOpcaoComponent,
        ProdutoCountComponent,
    ],
    exports: [
        CardapioHeaderComponent,
        CardapioRestauranteComponent,
        CardapioSacolaComponent,
        CardapioProdutosComponent,
        CardapioItemComponent,
        ProdutoAdicionalComponent,
        ProdutoAdicionalOpcaoComponent,
        ProdutoCountComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }