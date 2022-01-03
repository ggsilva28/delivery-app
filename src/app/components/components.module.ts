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

//Restaurante
import { RestauranteContatosComponent } from './restaurante/restaurante-contatos/restaurante-contatos.component';
import { RestauranteEnderecoComponent } from './restaurante/restaurante-endereco/restaurante-endereco.component';
import { RestauranteHorariosComponent } from './restaurante/restaurante-horarios/restaurante-horarios.component';

//Sacola
import { SacolaDetalhesEntregaComponent } from './sacola/sacola-detalhes-entrega/sacola-detalhes-entrega.component';

//Forms
import { InputMessageComponent } from './forms/input-message/input-message.component';

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
        RestauranteContatosComponent,
        RestauranteEnderecoComponent,
        RestauranteHorariosComponent,
        SacolaDetalhesEntregaComponent,
        InputMessageComponent,
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
        RestauranteContatosComponent,
        RestauranteEnderecoComponent,
        RestauranteHorariosComponent,
        SacolaDetalhesEntregaComponent,
        InputMessageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }