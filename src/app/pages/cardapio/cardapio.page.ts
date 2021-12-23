import { Component, OnInit } from '@angular/core';

//services
import { RouterService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  constructor(
    public router: RouterService,
  ) {

  }

  ngOnInit() {
  }

}
