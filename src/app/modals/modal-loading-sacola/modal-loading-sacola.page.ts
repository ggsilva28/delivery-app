import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Lottie
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

//services
import { RouterService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-modal-loading-sacola',
  templateUrl: './modal-loading-sacola.page.html',
  styleUrls: ['./modal-loading-sacola.page.scss'],
})
export class ModalLoadingSacolaPage implements OnInit {

  public options: AnimationOptions = {
    path: 'assets/animations/pan_food.json',
  };

  public paths = ['assets/animations/pan_food.json', 'assets/animations/fast_food.json']
  public index = 1;
  public maxIndex;
  public finalizado = false;

  constructor(
    private router: RouterService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.maxIndex = this.paths.length
    this.changeAnimation()
  }

  changeAnimation(){
    setTimeout(() => {
      if(this.finalizado){
        return false
      }

      if(this.index == this.maxIndex){
        this.index = 0
      }
      console.log(this.paths[this.index])

      this.options = {...this.options, path: this.paths[this.index]}
      this.index = this.index + 1
      this.changeAnimation()
    }, 2000)

    setTimeout(() => {
      this.success()
    }, 8000)
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log('animationItem', animationItem);
  }

  success(){
    this.finalizado = true
    this.options = {...this.options, path: 'assets/animations/success.json', loop: false}
  }

  contatos(){
    this.modalController.dismiss()
    this.router.go('/restaurante')
  }

  cardapio(){
    this.modalController.dismiss()
    this.router.go('/cardapio')
  }
}
