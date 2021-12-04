import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-adicional',
  templateUrl: './produto-adicional.component.html',
  styleUrls: ['./produto-adicional.component.scss'],
})
export class ProdutoAdicionalComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() limite: number;
  @Input() obrigatorio: boolean;
  @Input() type: string;

  @Input() itens: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() { }

}
