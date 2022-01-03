import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { upperFirst } from 'cypress/types/lodash';
import { ProdutoPage } from 'src/app/pages/produto/produto.page';

@Component({
  selector: 'app-cardapio-item',
  templateUrl: './cardapio-item.component.html',
  styleUrls: ['./cardapio-item.component.scss'],
})
export class CardapioItemComponent implements OnInit {

  @Input() public simplificado: boolean = false;

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() { }

  async detalhes() {
    if(this.simplificado){
      return false
    }

    const modalProduto = await this.modal.create({
      component: ProdutoPage,
      cssClass: 'modal-produtos',
      swipeToClose: true,
      presentingElement: await this.modal.getTop() // Get the top-most ion-modal

    })

    return await modalProduto.present();
  }

}
