import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  
  products: Product[] = [];

  addProduct(productName: HTMLInputElement, productPrice: HTMLInputElement) {
    const newProduct: Product = {
      id: this.products.length + 1,
      name: productName.value,
      price: +productPrice.value
    };
    this.products.push(newProduct);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
