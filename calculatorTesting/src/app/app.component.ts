import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorTesting';
  sum(a:number,b:number):number{
    return a+b;
  }
  diff(a:number,b:number):number{
    return a-b;
  }
  prod(a:number,b:number){
    return a*b;
  }
  division(a:number,b:number){
    if(b==0){
      throw new Error("Division is not allowed");
    }
    else{
      return a/b;
    }
  }
}
