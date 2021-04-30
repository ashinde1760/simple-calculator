import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

 

  public num1: number;
  public num2: number;
  public result: number;
  public result1: string;

  addition() {
    if ((this.num1 && this.num2) != undefined)
    {
      this.result = this.num1 + this.num2;
      this.result1="The sum of " + this.num1 + " and " + this.num2 + " is " + this.result;
    }
    }

  subtraction() {
    if ((this.num1 && this.num2) != undefined)
    {
      this.result = this.num1 - this.num2;
      this.result1 = "The subtraction of " + this.num1 + " and " + this.num2 + " is " + this.result;
    }
    }
  multiplication() {
    if ((this.num1 && this.num2) != undefined) {
      this.result = this.num1 * this.num2;
      this.result1 = "The multiplication of " + this.num1 + " and " + this.num2 + " is " + this.result;
    }
  }
  division() {
    if ((this.num1 && this.num2) != undefined) {
      this.result = this.num1 / this.num2;
      this.result1 = "The division of " + this.num1 + " and " + this.num2 + " is " + this.result;
    }
  }






}
