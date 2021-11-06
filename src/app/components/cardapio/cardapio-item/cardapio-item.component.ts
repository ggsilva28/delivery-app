import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoPage } from 'src/app/pages/produto/produto.page';

@Component({
  selector: 'app-cardapio-item',
  templateUrl: './cardapio-item.component.html',
  styleUrls: ['./cardapio-item.component.scss'],
})
export class CardapioItemComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() { }

  async detalhes(){
    const modalProduto = await this.modal.create({
      component: ProdutoPage,
      cssClass: 'modal-produtos'
    })
  
    return await modalProduto.present();
  }

}
