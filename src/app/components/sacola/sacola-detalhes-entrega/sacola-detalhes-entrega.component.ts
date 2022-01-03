import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sacola-detalhes-entrega',
  templateUrl: './sacola-detalhes-entrega.component.html',
  styleUrls: ['./sacola-detalhes-entrega.component.scss'],
})
export class SacolaDetalhesEntregaComponent implements OnInit {

  @Input() public titulo: string;
  @Input() public subtitulo: string;
  @Input() public icone: string = 'alert-circle';

  constructor() { }

  ngOnInit() { }

}
