import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tipo-entrega',
  templateUrl: './modal-tipo-entrega.page.html',
  styleUrls: ['./modal-tipo-entrega.page.scss'],
})
export class ModalTipoEntregaPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss()
  }
}
