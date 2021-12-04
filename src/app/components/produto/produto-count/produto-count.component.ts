import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styleUrls: ['./produto-count.component.scss'],
})
export class ProdutoCountComponent implements OnInit {

  @Input() start: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 99999999;

  constructor(
    private alertController: AlertController,
  ) { }

  @Output() public change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  plus() {
    if (this.start < this.max) {
      this.start = Number(this.start) + 1;
      this.emit()
    }
  }

  sub() {
    if (this.start > this.min) {
      this.start = this.start - 1;
      this.emit()
    }
  }

  emit() {
    this.change.emit({ detail: { value: this.start } });
  }

}
