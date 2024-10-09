import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {

  groceryList: { name: string, price: number, expiration: string }[] = [];

  addItem(name: string, price: string, expiration: string) {
    if (name && price && expiration) {
      const newItem = {
        name: name,
        price: parseFloat(price),
        expiration: expiration
      };
      this.groceryList.push(newItem);  // Add item to the list
    }
  }

  // Function to remove an item from the grocery list
  removeItem(index: number) {
    this.groceryList.splice(index, 1);  // Remove the item from the array
  }
}
