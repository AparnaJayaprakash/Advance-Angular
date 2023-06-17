import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parent-child-App';
  enterName= 'Aparna';
  parentData="";
  enterAge= '23';
  parentData2="";
  parentData3="";
  enterOccupation="Software Engineer"


transferData(){
  this.parentData = this.enterName;
}

transferData2(){
  this.parentData2 = this.enterAge;
}

transferData3(){
  this.parentData3 = this.enterOccupation;
}

value = "";
sendData(value: string){
  this.value = value
}
}


