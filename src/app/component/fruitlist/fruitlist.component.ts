import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  Fruitlist: string[] = [];

  addfruitlist(fruit: string) {
    if (fruit) {
      this.Fruitlist.push(fruit);
    }
  }

  removeFruitlist(index: number) {
    this.Fruitlist.splice(index, 1);
  }
}
