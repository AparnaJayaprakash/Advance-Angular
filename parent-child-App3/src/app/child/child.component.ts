import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  msg!: string;

  @Output() public rcvMsg = new EventEmitter<string>();
  

  sendMsg(){
    this.rcvMsg.emit('Hey Aparna from child');
  }




}
