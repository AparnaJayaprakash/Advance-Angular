import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testng1';
  num1!: number;
  num2!: number;
  result!: number;

  sum(): void {
    this.result = this.num1 + this.num2;
  }

  diff(): void {
    this.result = this.num1 - this.num2;
  }

  prod(): void {
    this.result = this.num1 * this.num2;
  }

  division(): void {
    if (this.num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result = this.num1 / this.num2;
  }
}
