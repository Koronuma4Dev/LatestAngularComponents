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
  productlist: string[] = ['Bread', 'Milk', 'Coffee', 'Canned goods','Beans', 'Cereal'];



  
  addProduct(productInput: HTMLInputElement) {
    const product = productInput.value.trim();
    if (product) {
      this.productlist.push(product);
      productInput.value= '';  
    }
  }

  removeProduct(index: number) {
    this.productlist.splice(index, 1); 
  }
}
