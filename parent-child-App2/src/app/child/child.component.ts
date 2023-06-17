import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  message!: string;
  @Output() public recieveMessage  = new EventEmitter<string>();
  
  sendMessage() {
    this.recieveMessage.emit('Hello from child!');
  }

}
