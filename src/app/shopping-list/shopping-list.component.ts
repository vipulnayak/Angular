import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports:[CurrencyPipe,FormsModule,CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  products: { name: string, price: number }[] = [];
  currentProduct: { name: string, price: number } = { name: '', price: 0 };
  isEditing: boolean = false;

  onSubmit() {
    if (this.isEditing) {
      // Update existing product
      const editedProductIndex = this.products.findIndex(p => p === this.currentProduct);
      this.products[editedProductIndex] = { ...this.currentProduct };
    } else {
      // Add new product
      this.products.push({ ...this.currentProduct });
    }

    // Clear the form
    this.currentProduct = { name: '', price: 0 };
    this.isEditing = false;
  }

  editProduct(index: number) {
    this.currentProduct = { ...this.products[index] };
    this.isEditing = true;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
