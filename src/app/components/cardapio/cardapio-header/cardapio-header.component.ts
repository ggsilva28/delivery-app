import { Component, OnInit } from '@angular/core';

//services
import { RouterService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-cardapio-header',
  templateUrl: './cardapio-header.component.html',
  styleUrls: ['./cardapio-header.component.scss'],
})
export class CardapioHeaderComponent implements OnInit {

  constructor(
    public routes: RouterService
  ) { }

  ngOnInit() {}

}
