import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

//Services
import { StorageService } from 'src/app/services/storage.service';
import { RouterService } from 'src/app/services/routes.service';

//Utils
import { keys } from 'src/app/utils/keys.enum';

//Modal
import { ModalLoadingSacolaPage } from 'src/app/modals/modal-loading-sacola/modal-loading-sacola.page';
import { ModalTipoEntregaPage } from 'src/app/modals/modal-tipo-entrega/modal-tipo-entrega.page';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.page.html',
  styleUrls: ['./sacola.page.scss'],
})
export class SacolaPage implements OnInit {

  public cliente;
  public entrega;
  public recebimento;

  constructor(
    private storage: StorageService,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.cliente = await this.storage.get(keys.CLIENTE);
    this.entrega = await this.storage.get(keys.ENTREGA);
  }

  getRua() {
    return `${this.entrega?.endereco}, ${this.entrega?.numero}`
  }

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

  async save() {
    const modal = await this.modalController.create({
      component: ModalLoadingSacolaPage,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
