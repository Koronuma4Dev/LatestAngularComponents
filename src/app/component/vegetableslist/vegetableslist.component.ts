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
  vegetables: string[] = ['Tomato', 'Carrot', 'Broccoli'];

  newVegetable: string = '';


  addVegetable() {
    if (this.newVegetable.trim()) {
      this.vegetables.push(this.newVegetable);
      this.newVegetable = '';  
    }
  }

  removeVegetable(index: number) {
    this.vegetables.splice(index, 1); 
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.newVegetable = inputElement.value;
  }
}
