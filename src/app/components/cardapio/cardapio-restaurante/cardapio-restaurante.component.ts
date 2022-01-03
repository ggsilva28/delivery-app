import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//services
import { RouterService } from 'src/app/services/routes.service';

//Modal
import { ModalTipoEntregaPage } from 'src/app/modals/modal-tipo-entrega/modal-tipo-entrega.page';

@Component({
  selector: 'app-cardapio-restaurante',
  templateUrl: './cardapio-restaurante.component.html',
  styleUrls: ['./cardapio-restaurante.component.scss'],
})
export class CardapioRestauranteComponent implements OnInit {

  constructor(
    public router: RouterService,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  async selecionarTipo() {
    const modal = await this.modalController.create({
      component: ModalTipoEntregaPage,
      cssClass: 'modal-bottom',
      breakpoints: [.4, .8],
      initialBreakpoint: .4,
      swipeToClose: true,
    });
    return await modal.present();
  }

}
