import { Component } from '@angular/core';




@Component({
  selector: 'app-foodmenulist',
  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  menuItems = [
    { name: 'Chicken Adobo with rice', price: 70 },
    { name: 'Pesto pasta', price: 100 },
    { name: 'Tuna sandwhich', price: 30 },
    { name: 'Water bottle', price: 15 },

  ];

  removeItem(item: any) {
    const index = this.menuItems.indexOf(item);
    if (index !== -1) {
      this.menuItems.splice(index, 1);
    }
  }

  addItem() {
    const newItem = { name: 'New Item', price: 9.99 };
    this.menuItems.push(newItem);
  }
}
