import { Component } from '@angular/core';

interface Flower {
  name: string;
}

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowers: Flower[] = []; 
  flowerName: string = ''; 

  addFlower() {
    if (this.flowerName.trim()) {
      const newFlower: Flower = { name: this.flowerName.trim() };
      this.flowers.push(newFlower);
      this.flowerName = ''; }
  }

  removeFlower(flower: Flower) {
    const index = this.flowers.indexOf(flower);
    if (index !== -1) {
      this.flowers.splice(index, 1);
    }
  }
}
