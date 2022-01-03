import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

//utils
import { FormMessages, Message } from 'src/app/utils/form-message';

@Component({
  selector: 'form-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements OnInit {

  @Input() public control: FormControl;
  @Input() public type: string = 'error';
  @Output() public onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }


  get message() {
    let result = null;
    for (const propertyName in this.control.errors) {
      switch (this.type) {
        case 'error': {
          result = this.messageError(propertyName)
          break
        }
      }
    }

    return result;
  }

  messageError(propertyName: string) {
    if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)) {
      let messageObj: Message = FormMessages.get(propertyName);
      if (messageObj) {
        this.onChange.emit(messageObj);
        return messageObj;
      }
    }
  }

}
