import { Component } from '@angular/core';

interface Vegetable {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-vegetableslist',
  templateUrl: './vegetableslist.component.html',
  styleUrl: './vegetableslist.component.css'
})
export class VegetableslistComponent {
  vegetables: Vegetable[] = [];

  addVegetable(vegetableName: HTMLInputElement, vegetableQuantity: HTMLInputElement, vegetablePrice: HTMLInputElement) {
    const newVegetable: Vegetable = {
      id: this.vegetables.length + 1,
      name: vegetableName.value,
      quantity: +vegetableQuantity.value,
      price: +vegetablePrice.value
    };
    this.vegetables.push(newVegetable);
  }

  removeVegetable(vegetableId: number) {
    this.vegetables = this.vegetables.filter(vegetable => vegetable.id !== vegetableId);
  }
}
