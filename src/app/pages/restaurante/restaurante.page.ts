import { Component, OnInit } from '@angular/core';

//Services
import { RouterService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  public segment = 'contatos'

  constructor(
    public router: RouterService
  ) { }

  ngOnInit() {
  }

  switchSegment(e) {
    this.segment = e.detail.value
  }

}
