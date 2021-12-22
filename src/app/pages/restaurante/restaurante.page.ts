import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  public segment = 'horarios'

  constructor() { }

  ngOnInit() {
  }

  switchSegment(e){
    this.segment = e.detail.value
  }

}
