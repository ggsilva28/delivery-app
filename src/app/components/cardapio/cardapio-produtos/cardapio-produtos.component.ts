import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-produtos',
  templateUrl: './cardapio-produtos.component.html',
  styleUrls: ['./cardapio-produtos.component.scss'],
})
export class CardapioProdutosComponent implements OnInit {

  public items = [{}, {}, {}, {}, {}, {}]

  constructor() { }

  ngOnInit() { }

  mudarCategoria(e) {
    document.querySelector(`[value="${e.detail.value}"]`).scrollIntoView({ behavior: "smooth", inline: 'center' });
  }

}
