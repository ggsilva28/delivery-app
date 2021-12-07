import { Component, OnInit } from '@angular/core';

//services
import { RouterService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-cardapio-restaurante',
  templateUrl: './cardapio-restaurante.component.html',
  styleUrls: ['./cardapio-restaurante.component.scss'],
})
export class CardapioRestauranteComponent implements OnInit {

  constructor(
    public router: RouterService
  ) { }

  ngOnInit() {}

}
