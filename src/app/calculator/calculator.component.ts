import { CommonModule } from '@angular/common';
import { Component,NgModule } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display: string = '';
  expression: string = '';

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculate();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.addToExpression(value);
    }
  }

  calculate() {
    try {
      this.display = eval(this.expression);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clear() {
    this.expression = '';
    this.display = '';
  }

  addToExpression(value: string) {
    this.expression += value;
    this.display = this.expression;
  }
}