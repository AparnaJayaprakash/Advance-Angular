import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMsg!: string;
  rcvdMsg!: string;

  parent(){
  this.parentMsg = 'Hey Tressa from parent';
  }
  

  rcvMsg(message: string){
    this.rcvdMsg = message;
  }



  
}
