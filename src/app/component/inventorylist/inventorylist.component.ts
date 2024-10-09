import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {

  inventorylist:string[]=['Can goods', 'Bread', 'Milk', '1 Galon of water', 'Rice', 'Coffee 3 in 1'];

  addInventory(inventoryInput: HTMLInputElement){
    const inventory = inventoryInput.value.trim();

    if(inventory){
      this.inventorylist.push(inventory);
      inventoryInput.value='';
    }
  }

  removeInventory(index: number){
    this.inventorylist.splice(index, 1);
  }

}
