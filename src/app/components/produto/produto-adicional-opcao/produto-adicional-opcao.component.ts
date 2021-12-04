import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-adicional-opcao',
  templateUrl: './produto-adicional-opcao.component.html',
  styleUrls: ['./produto-adicional-opcao.component.scss'],
})
export class ProdutoAdicionalOpcaoComponent implements OnInit {

  @Input() type: any;
  @Input() index: number;

  public mostrarCount:boolean = false;

  constructor() { }

  ngOnInit() { }

  countChange(e){
    if(e.detail.value == 0){
      this.mostrarCount = false;
    }
  }
}
