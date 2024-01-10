import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-square-factorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square-factorial.component.html',
  styleUrl: './square-factorial.component.css'
})
export class SquareFactorialComponent {
  number: number;
  squareResult: number;
  factorialResult: number;

  constructor() {
    this.number = 0;
    this.squareResult = 0;
    this.factorialResult = 0;
  }

  calculateSquare() {
    const numberInput = document.getElementById('numberInput') as HTMLInputElement;
    this.number = parseInt(numberInput.value, 10);
    this.squareResult = this.number * this.number;

    // Reset factorial result
    this.factorialResult = 0;
  }

  calculateFactorial() {
    const numberInput = document.getElementById('numberInput') as HTMLInputElement;
    this.number = parseInt(numberInput.value, 10);

    if (this.number < 0) {
      this.factorialResult = 0; // Factorial is not defined for negative numbers
    } else {
      this.factorialResult = this.factorial(this.number);
    }

    // Reset square result
    this.squareResult = 0;
  }

  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
