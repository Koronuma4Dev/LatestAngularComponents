import { Component } from '@angular/core';


@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {

  flowerlist: string[]=['Tulips', 'Rose', 'Daisy', 'Sunflower'];

  addFlower(flowerInput: HTMLInputElement){
    const flower = flowerInput.value.trim();

    if (flower){
      this.flowerlist.push(flower);
      flowerInput.value='';

    }
  }
removeFlower(index: number){
  this.flowerlist.splice(index, 1);
}
}
