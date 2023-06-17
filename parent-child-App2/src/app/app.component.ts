import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
   
  }
  parentMessage: string ='Hello from Parent';
  recievedMessage!: string;

  recieveMessage(message: any){
    this.recievedMessage = message;
  }
}
